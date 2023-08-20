interface NavbarRef {
    AboutRef?: React.MutableRefObject;
    FiveMStoreRef?: React.MutableRefObject;
    ContactRef?: React.MutableRefObject;
}

interface Navbar {
    label: string;
    ref: React.MutableRefObject;
}
