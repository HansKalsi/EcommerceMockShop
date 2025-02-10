export function Sidepanel(props: { open: boolean }) {
    return (
        <div hidden={!props.open} role="sidepanel" className="sidepanel">
            <header>
                <h2>Sidepanel</h2>
            </header>
            <main>
                Content...
            </main>
            <footer>
                <button onClick={() => console.log('click')}>Click me</button>
            </footer>
        </div>
    )
}
