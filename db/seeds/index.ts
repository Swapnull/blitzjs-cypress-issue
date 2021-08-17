import db from "db"

const seeds = () => {
  db.user.findMany()
}

export default seeds
