import { useState } from "react"

import { getNepaliFromEnglish } from "~node_modules/nepali-input-react/dist"

function IndexPopup() {
  const [data, setData] = useState("")

  return (
    <>
      {" "}
      <div
        style={{
          padding: 16
        }}>
        <p>"Nepali-react-transliterate":</p>
        <input onChange={(e) => setData(e.target.value)} value={data} />
        <p>{getNepaliFromEnglish(data)}</p>
      </div>
      <div>
        <iframe src="https://www.ashesh.com.np/linknepali-unicode3.php?api=642116p323"></iframe>
        <span>
          <a
            href="https://www.ashesh.com.np/nepali-unicode.php"
            title="Nepali unicode"
            target="_top">
            Nepali Unicode
          </a>
        </span>
      </div>
    </>
  )
}

export default IndexPopup
