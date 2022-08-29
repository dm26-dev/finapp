
import { Backdrop } from './Backdrop'
import { Header } from './Header'
import { Sidebar } from './Sidebar'

export const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <Sidebar />
            {children}
            <Backdrop />
        </div>
    )
}
