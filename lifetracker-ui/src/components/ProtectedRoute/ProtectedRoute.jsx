import { useAuthContext } from "../../../contexts/auth"

const {initialized,setInitialized} = useAuthContext()
const {user,setUser} = useAuthContext()