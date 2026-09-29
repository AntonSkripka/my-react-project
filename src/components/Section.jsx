export default function Section({ children, title }) {
    console.log(children);
    console.log(title);
    return (
    <section>
        <h1>{title}</h1>
        {children}
    </section>
    )
}