import { useState } from "react"

import { getNepaliFromEnglish } from "~node_modules/nepali-input-react/dist"

function IndexPopup() {
  const [data, setData] = useState("")

  return (
    <div
      style={{
        padding: 16
      }}>
      <input onChange={(e) => setData(e.target.value)} value={data} />
      <p>{data}</p>
      <p>{getNepaliFromEnglish(data)}</p>
    </div>
  )
}

export default IndexPopup
