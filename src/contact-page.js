function loadContactPage() {
    const contentDiv = document.querySelector("#content");
    const visitDiv = createDomElement("div", "section-header", "visit us");
    contentDiv.appendChild(visitDiv);
    const contactContainerDiv = createDomElement("div", "contact-container");
    contentDiv.appendChild(contactContainerDiv);

    const contactInfoDiv = createDomElement("div", "contact-info");
    const addressDiv = createDomElement("div", "address", "address: 1 chome-1-83 shimorenjaku, mitaka, tokyo 181-0013, japan");
    const telDiv = createDomElement("div", "tel", "tel: 123-456-0987");
    const hoursDiv = createDomElement("div", "hours", "hours");
    const hoursUl = createDomElement("ul");
    let hoursTxt = ["sun: closed", "mon - thurs: 12pm - 8pm", "fri - sat: 12pm - 10pm"]
    for (let text of hoursTxt) {
        hoursUl.appendChild(createDomElement("li", "", text));
    }
    contactInfoDiv.appendChild(addressDiv);
    contactInfoDiv.appendChild(telDiv);
    contactInfoDiv.appendChild(hoursDiv);
    hoursDiv.appendChild(hoursUl);
    contactContainerDiv.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.2184198460354!2d139.56785677515222!3d35.69624232915027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018ee34e5038c2d%3A0x4de155903f849205!2sGhibli%20Museum!5e0!3m2!1sen!2sus!4v1703297805063!5m2!1sen!2sus" width="500" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    contactContainerDiv.appendChild(contactInfoDiv);
    
}

function createDomElement(tag, className = null, textContent = "") {
    const element = document.createElement(tag);
    if (className) {
        element.classList.add(className);
    }
    element.textContent = textContent;
    return element;
}

export { loadContactPage }