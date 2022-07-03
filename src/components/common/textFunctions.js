export function splitText(text) {
    return text?.split("\n")?.map((str, idx) => str.length === 0 ?
        <br key={idx} /> :
        <p key={idx} dangerouslySetInnerHTML={{ __html: str.replaceAll('"', '') }} />);
}

export function splitSignature(text) {
    const signature = text?.split("\n");
    return signature?.map((str, idx) =>
        <p key={idx} style={{ fontStyle: "italic", textAlign: "right" }}>{idx === signature.length - 1 ? "-" : null} {str}</p>
    )
}