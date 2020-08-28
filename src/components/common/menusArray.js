import  config from '../../utils/config.js';
let menuList = [];
const menus = [
    {
        icon: 'el-icon-s-tools',
        index: '9',
        title: '基础信息管理',
        jurisdiction: true,
        subs: [
            {
                index: '9-2',
                title: '基础配置',
                subs: [
                    {
                        index: "storeManagement",
                        title: '店铺管理'
                    },
                    {
                        index: "instrumentManagement",
                        title: '仪器管理'
                    },
                    {
                        index: "userData",
                        title: "用户信息"
                    }
                ]
            },
        ]
    },
    {
        icon: 'el-icon-lx-home',
        index: 'dashboard',
        title: '系统首页'
    },
    {
        icon: 'el-icon-lx-cascades',
        index: 'table',
        title: '基础表格'
    },
    {
        icon: 'el-icon-lx-copy',
        index: 'tabs',
        title: 'tab选项卡'
    },
    {
        icon: 'el-icon-lx-calendar',
        index: '3',
        title: '表单相关',
        subs: [
            {
                index: 'form',
                title: '基本表单'
            },
            {
                index: 'empteyForm',
                title: '自定义表单'
            },
            {
                index: '3-2',
                title: '三级菜单',
                subs: [
                    {
                        index: 'editor',
                        title: '富文本编辑器'
                    },
                    {
                        index: 'markdown',
                        title: 'markdown编辑器'
                    }
                ]
            },
            {
                index: 'upload',
                title: '文件上传'
            }
        ]
    },
    {
        icon: 'el-icon-lx-emoji',
        index: 'icon',
        title: '自定义图标'
    },
    {
        icon: 'el-icon-pie-chart',
        index: '_11',
        title: '图表组件',
        subs: [
            {
                index: 'charts',
                title: 'schart图表'
            },
            {
                index: 'echarts',
                title: 'echarts图表'
            }
        ],
    },
    {
        icon: 'el-icon-rank',
        index: '6',
        title: '拖拽组件',
        subs: [
            {
                index: 'drag',
                title: '拖拽列表'
            },
            {
                index: 'dialog',
                title: '拖拽弹框'
            }
        ]
    },
    {
        icon: 'el-icon-lx-global',
        index: 'i18n',
        title: '国际化功能'
    },
    {
        icon: 'el-icon-lx-warn',
        index: '7',
        title: '错误处理',
        subs: [
            {
                index: 'permission',
                title: '权限测试'
            },
            {
                index: '404',
                title: '404页面'
            },
        ]
    },
    {
        icon: 'el-icon-s-shop',
        index: '8',
        title: '常用业务场景',
        subs: [
            {
                index: "management",
                title: '业务界面1'
            },
           
        ]
    }
]

const _flag = config.userList.includes(localStorage.getItem('ms_username'));
if(_flag && localStorage.getItem('ms_username') != 'admin'){
    menuList = menus.filter(k => k.jurisdiction == true);
} else if (localStorage.getItem('ms_username') == 'admin') {
    menuList = menus;
} else {
    menuList = [];
}

export default menuList;