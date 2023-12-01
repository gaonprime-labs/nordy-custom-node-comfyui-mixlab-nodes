import { app } from '../../../scripts/app.js'

const repoOwner = 'shadowcz007' // 替换为仓库的所有者
const repoName = 'comfyui-mixlab-nodes' // 替换为仓库的名称

const version='v0.2.1'
// const vn=(v)=>parseFloat(v.replace('v', '').replace(/\./ig, ''))

fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/releases/latest`)
  .then(response => response.json())
  .then(data => {
    const latestVersion = data.tag_name
    console.log('Latest release version:', latestVersion )
    
    if(latestVersion!=version){

      app.ui.dialog.show(`<h4 style="font-size: 18px;">${repoName} <br>
      Latest release version: ${latestVersion}</h4>
      <p>Please proceed to the official repository to download the latest version.</p>
      <a style="    color: #2196F3;
      font-size: 18px;
      font-weight: 800;
      letter-spacing: 2px;
  }"
  href="https://github.com/shadowcz007/comfyui-mixlab-nodes/releases/">https://github.com/shadowcz007/comfyui-mixlab-nodes/releases</a>
      `)

        // window.alert(
        //     `Please proceed to the official repository to download the latest version.https://github.com/shadowcz007/comfyui-mixlab-nodes/releases/`
        //   )
        //   window.open(
        //     'https://github.com/shadowcz007/comfyui-mixlab-nodes/releases/'
        //   )
    }
  })
  .catch(error => {
    console.error('Error fetching release information:', error)
  })
//  #MixCopilot
