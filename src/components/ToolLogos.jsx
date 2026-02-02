import React from 'react';

const ToolLogos = () => (
  <div className="flex gap-6 sm:gap-10 items-center justify-center">
    {/* Cursor */}
    <div className="tool-icon">
      <img
        src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@latest/icons/cursor.svg"
        alt="Cursor"
        width="36"
        height="36"
      />
    </div>
    {/* Linear */}
    <div className="tool-icon">
      <img 
        src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@latest/icons/linear.svg" 
        alt="Linear" 
        width="36" 
        height="36"
      />
    </div>
    {/* Slack */}
    <div className="tool-icon">
      <img 
        src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@latest/icons/slack.svg" 
        alt="Slack" 
        width="36" 
        height="36"
      />
    </div>
    {/* Discord */}
    <div className="tool-icon">
      <img 
        src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@latest/icons/discord.svg" 
        alt="Discord" 
        width="36" 
        height="36"
      />
    </div>
    {/* Notion */}
    <div className="tool-icon">
      <img 
        src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@latest/icons/notion.svg" 
        alt="Notion" 
        width="36" 
        height="36"
      />
    </div>
    {/* GitHub */}
    <div className="tool-icon">
      <img
        src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@latest/icons/github.svg"
        alt="GitHub"
        width="36"
        height="36"
      />
    </div>
    {/* Obsidian */}
    <div className="tool-icon">
      <img
        src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@latest/icons/obsidian.svg"
        alt="Obsidian"
        width="36"
        height="36"
      />
    </div>
    {/* VS Code */}
    <div className="tool-icon">
      <img
        src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@latest/icons/visualstudiocode.svg"
        alt="VS Code"
        width="36"
        height="36"
      />
    </div>

    <style>{`
      .tool-icon {
        opacity: 0.4;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        cursor: pointer;
        position: relative;
      }
      .tool-icon:hover {
        opacity: 1;
        transform: translateY(-2px);
      }
      .tool-icon img {
        display: block;
        transition: filter 0.3s ease;
      }
      /* Dark mode: invert icons to white with brightness */
      .dark .tool-icon {
        opacity: 0.6;
      }
      .dark .tool-icon img {
        filter: invert(1) brightness(1.2);
      }
      .dark .tool-icon:hover {
        opacity: 1;
      }
      /* Cursor品牌色 */
      .tool-icon:nth-child(1):hover img {
        filter: brightness(0) saturate(100%) invert(50%) sepia(98%) saturate(2476%) hue-rotate(180deg) brightness(100%) contrast(101%);
      }
      /* Linear品牌色 */
      .tool-icon:nth-child(2):hover img {
        filter: brightness(0) saturate(100%) invert(38%) sepia(98%) saturate(1945%) hue-rotate(228deg) brightness(98%) contrast(101%);
      }
      /* Slack品牌色 */
      .tool-icon:nth-child(3):hover img {
        filter: brightness(0) saturate(100%) invert(22%) sepia(92%) saturate(5584%) hue-rotate(272deg) brightness(83%) contrast(109%);
      }
      /* Discord品牌色 */
      .tool-icon:nth-child(4):hover img {
        filter: brightness(0) saturate(100%) invert(42%) sepia(93%) saturate(1352%) hue-rotate(205deg) brightness(97%) contrast(104%);
      }
      /* Notion品牌色 */
      .tool-icon:nth-child(5):hover img {
        filter: brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(20%) contrast(100%);
      }
      /* GitHub品牌色 */
      .tool-icon:nth-child(6):hover img {
        filter: brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(20%) contrast(100%);
      }
      /* Obsidian品牌色 (紫色) */
      .tool-icon:nth-child(7):hover img {
        filter: brightness(0) saturate(100%) invert(30%) sepia(94%) saturate(1352%) hue-rotate(243deg) brightness(87%) contrast(96%);
      }
      /* VS Code品牌色 (蓝色) */
      .tool-icon:nth-child(8):hover img {
        filter: brightness(0) saturate(100%) invert(45%) sepia(98%) saturate(2000%) hue-rotate(190deg) brightness(95%) contrast(101%);
      }
    `}</style>
  </div>
);

export default ToolLogos;
