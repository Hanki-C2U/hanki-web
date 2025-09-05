import { useEffect, useState } from "react"
import { useParams } from "react-router"
import getMentee from "../services/getMentee"

export default function MenteeProfile() {
  const { id } = useParams()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchUser() {
      try {
        setLoading(true)
        const data = await getMentee(id)
        setUser(data)
      } catch (error) {
        console.error("Error fetching user:", error)
      } finally {
        setLoading(false)
      }
    }
    if (id) fetchUser()
  }, [id])

  if (loading) return <h1>Loading...</h1>
  if (!user) return <h1>User not found</h1>
  console.log(user)

  return (
    <div>
      <h1>mentee profile</h1>
    </div>
  )
}