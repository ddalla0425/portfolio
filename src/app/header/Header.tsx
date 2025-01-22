
const Header = (): JSX.Element => {
    return (
        <>
            <header className="p-5">
                <div className="wrapper flex justify-between m-auto">
                    <h1>Logo</h1>
                    <ul className="flex">
                        <li>메뉴1</li>
                        <li>메뉴2</li>
                        <li>메뉴3</li>
                        <li>메뉴4</li>
                    </ul>
                </div>
            </header>
        </>
    );
};

export default Header;
