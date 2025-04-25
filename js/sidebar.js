/**
 * 侧边栏收缩功能
 * 用于控制智慧征迁系统侧边栏的展开和收缩
 */

document.addEventListener('DOMContentLoaded', function() {
    // 获取侧边栏元素
    const sidebar = document.querySelector('.sidebar');
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const mainContent = document.querySelector('.main-content');
    const menuTexts = document.querySelectorAll('.sidebar nav a span');
    
    // 更新所有页面的标题，添加图标
    const titleElement = document.querySelector('.sidebar h1');
    if (titleElement && !titleElement.querySelector('i')) {
        const titleText = titleElement.textContent.trim();
        titleElement.innerHTML = `<i class="fas fa-building mr-2"></i><span>${titleText}</span>`;
        titleElement.classList.add('flex', 'items-center');
    }
    
    // 添加侧边栏收缩时的样式
    const style = document.createElement('style');
    style.textContent = `
        .sidebar.collapsed h1 span {
            display: none;
        }
        .sidebar.collapsed h1 i {
            margin-right: 0;
            font-size: 1.5rem;
        }
    `;
    document.head.appendChild(style);
    
    // 检查本地存储中的侧边栏状态
    const sidebarCollapsed = localStorage.getItem('sidebarCollapsed') === 'true';
    
    // 根据存储的状态设置初始状态
    if (sidebarCollapsed) {
        sidebar.classList.add('collapsed');
        mainContent.classList.add('expanded');
        menuTexts.forEach(span => span.classList.add('hidden'));
    }
    
    // 切换侧边栏状态的函数
    function toggleSidebar() {
        sidebar.classList.toggle('collapsed');
        mainContent.classList.toggle('expanded');
        
        // 切换菜单文本的显示状态
        menuTexts.forEach(span => {
            span.classList.toggle('hidden');
        });
        
        // 保存状态到本地存储
        const isCollapsed = sidebar.classList.contains('collapsed');
        localStorage.setItem('sidebarCollapsed', isCollapsed);
    }
    
    // 为切换按钮添加点击事件
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', toggleSidebar);
    }
});