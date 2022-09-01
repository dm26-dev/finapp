
import { Backdrop } from './Backdrop'
import { Header } from './Header'
import { Sidebar } from './Sidebar'

export const Layout = ({ children, urlRedirect }) => {
    return (
        <div>
            <Header urlRedirect={urlRedirect} />
            <Sidebar />
            {children}
            <Backdrop />
        </div>
    )
}
