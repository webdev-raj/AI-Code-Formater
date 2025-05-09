import 'remixicon/fonts/remixicon.css'
const userWillPaste = document.querySelector("#userWillPaste");
const formateBtn = document.querySelector("#formateBtn");
const dynamicTextRender = document.querySelector("#dynamicTextRender");
const styleSelector = document.querySelector("#styleSelector");
const copyBtn = document.querySelector("#copyBtn");

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
async function postAndGetReplayApi(userC, styleSelect) {
    let row = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [
                            {
                                text: `Format the following JavaScript code using the ${styleSelect} style guide. 
Return only the formatted code without any explanation or extra text:${userC}
`,
                            },
                        ],
                    },
                ],
            }),
        }
    );
    let data = await row.json();
    dynamicTextRender.value = data.candidates[0].content.parts[0].text;
    copyFeature(dynamicTextRender.value);
}
formateBtn.addEventListener("click", () => {
    let styleSelectedByUser =
        styleSelector.options[styleSelector.selectedIndex].textContent;
    let userCode = userWillPaste.value;
    postAndGetReplayApi(userCode, styleSelectedByUser);
});
function copyFeature(dynamicText) {
    copyBtn.addEventListener("click", () => {
        navigator.clipboard
            .writeText(dynamicText)
            .then(() => {
                console.log("Code is copy");
            })
            .catch(() => {
                console.log("not able to copy");
            });
    });
}
