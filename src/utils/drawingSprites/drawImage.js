function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error('Erro ao carregar a imagem.'));
    img.src = src;
  });
}

function drawImageOnCanvas(img, canvasId) {
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext('2d');
  canvas.width = img.width;
  canvas.height = img.height;

  ctx.drawImage(img, 0, 0);
}

async function displaySprite(signedUrl, canvasId)
{
  try {
    const img = await loadImage(signedUrl);
    drawImageOnCanvas(img, canvasId);
  } catch (err) {
    console.error(err.message);
  }
}

export default displaySprite;
