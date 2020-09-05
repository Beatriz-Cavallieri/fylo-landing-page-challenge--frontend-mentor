const benefits = []
for (let i = 1; i <= 4; i++) {
    benefits.push(document.getElementById(`benefit-${i}`))
}

const benefitsContent = [
    {
        image: "../../images/icon-access-anywhere.svg",
        title: "Acess your files, anywhere",
        description: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."
    },
    {
        image: "../../images/icon-collaboration.svg",
        title: "Real-time collaboration",
        description: "Securely share files and folders with friends, family and colleagues for live collaboration. No e-mail attachments required."
    },
    {
        image: "../../images/icon-security.svg",
        title: "Security you can trust",
        description: "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
    },
    {
        image: "../../images/icon-any-file.svg",
        title: "Store any type of file",
        description: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
    }
]

for (let i = 0; i < 4; i++) {
    const image = document.createElement("img");
    image.setAttribute("src", benefitsContent[i].image);

    const title = document.createElement("h3");
    title.textContent = benefitsContent[i].title;

    const description = document.createElement("p");
    description.textContent = benefitsContent[i].description;

    benefits[i].appendChild(image);
    benefits[i].appendChild(title);
    benefits[i].appendChild(description);
}