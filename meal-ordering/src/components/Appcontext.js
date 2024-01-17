import {SessionProvider} from "next-auth/react"

export default AppProvider({children}){
    return (
        <SessionProvider>{children}</SessionProvider>
    )
}