// import React, { use, useEffect, useState } from 'react'
// // import { supabaseClient } from '../../utils/API/supabaseAPI'
// import displaySprite from '../../utils/drawingSprites/drawImage'

// export default function Assets({filename}) {
//   const [spriteUrl, setSpriteUrl] = useState(null)

//   useEffect(() => {
//     async function fetchSprite() {
      
//       const { data, error } = await supabaseClient
//         .storage
//         .from('sprites')
//         .createSignedUrl(filename, 60)
        
//       if (error) {
//         console.error('Erro ao gerar URL:', error)
//       } else {
//         setSpriteUrl(data.signedUrl)
//         displaySprite(data.signedUrl, 'canvasid')
//       }
//     }

//     fetchSprite()
//   }, [])

//   return (
//     <div onContextMenu={(e) => e.preventDefault()}>
//       <h2>Sprite:</h2>
//       {spriteUrl ? (
//         <canvas id='canvasid'></canvas>
//       ) : (
//         <p>Carregando sprite...</p>
//       )}
//     </div>
//   )
// }