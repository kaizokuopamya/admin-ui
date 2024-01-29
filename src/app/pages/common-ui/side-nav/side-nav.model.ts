export class SideNavData {
  menuId: number;
  menuName: string;
  menuImage: string;
  isEnable: string;
  subMenuList?: SubMenu[];
}

export class SubMenu {
  id?: number;
  menuName?: string;
  menudesc?: string;
  statusId?: number;
  menuLink?: string;
  menuLogo?: string;
  mainMenuid?: {
    id?: number;
    menuname?: string;
    statusId?: number;
    createdon?: number;
    updatedon?: number;
    createdby?: number;
    updatedby?: number;
    menuLogo?: string;
  };
  createdby?: number;
}

export const SIDEMENU: SideNavData[] = [
  {
    menuId: 399,
    menuName: 'Dynamic Page',
    menuImage: 'fa fa-file',
    isEnable: 'Y',
    subMenuList: [
      {
        id: 301,
        menuName: 'Create Element',
        menudesc: 'Dynamic Input',
        statusId: 3,
        menuLink: 'dynamicInput',
        menuLogo: 'fa fa-square-plus',
        mainMenuid: {
          id: 399,
          menuname: 'Dynamic Page',
          statusId: 3,
          createdon: 1595961000000,
          updatedon: 1608546640000,
          createdby: 1,
          updatedby: 6,
          menuLogo: 'fa fa-universal-access',
        },
        createdby: 1,
      },
      {
        id: 302,
        menuName: 'Dropdown Data',
        menudesc: 'Dropdown Data',
        statusId: 3,
        menuLink: 'dropdownData',
        menuLogo: 'fa fa-list',
        mainMenuid: {
          id: 399,
          menuname: 'Dynamic Page',
          statusId: 3,
          createdon: 1595961000000,
          updatedon: 1608546640000,
          createdby: 1,
          updatedby: 6,
          menuLogo: 'fa fa-universal-access',
        },
        createdby: 1,
      },
      {
        id: 303,
        menuName: 'Create Page',
        menudesc: 'Create Page',
        statusId: 3,
        menuLink: 'createPage',
        menuLogo: 'fa fa-file',
        mainMenuid: {
          id: 399,
          menuname: 'Dynamic Page',
          statusId: 3,
          createdon: 1595961000000,
          updatedon: 1608546640000,
          createdby: 1,
          updatedby: 6,
          menuLogo: 'fa fa-universal-access',
        },
        createdby: 1,
      },
      {
        id: 304,
        menuName: 'Page Element',
        menudesc: 'Page Element',
        statusId: 3,
        menuLink: 'pageElement',
        menuLogo: 'fa fa-cog',
        mainMenuid: {
          id: 399,
          menuname: 'Dynamic Page',
          statusId: 3,
          createdon: 1595961000000,
          updatedon: 1608546640000,
          createdby: 1,
          updatedby: 6,
          menuLogo: 'fa fa-universal-access',
        },
        createdby: 1,
      },
      {
        id: 305,
        menuName: 'Dynamic Page',
        menudesc: 'Dynamic Page',
        statusId: 3,
        menuLink: 'dynamicPage',
        menuLogo: 'fa fa-scroll',
        mainMenuid: {
          id: 399,
          menuname: 'Dynamic Page',
          statusId: 3,
          createdon: 1595961000000,
          updatedon: 1608546640000,
          createdby: 1,
          updatedby: 6,
          menuLogo: 'fa fa-universal-access',
        },
        createdby: 1,
      },
      {
        id: 306,
        menuName: 'Display Saved Data',
        menudesc: 'Get Saved Data',
        statusId: 3,
        menuLink: 'getsavedData',
        menuLogo: 'fa fa-table',
        mainMenuid: {
          id: 399,
          menuname: 'Dynamic Page',
          statusId: 3,
          createdon: 1595961000000,
          updatedon: 1608546640000,
          createdby: 1,
          updatedby: 6,
          menuLogo: 'fa fa-universal-access',
        },
        createdby: 1,
      },
      {
        id: 307,
        menuName: 'Create Page Versions',
        menudesc: 'Create New Page Versions',
        statusId: 3,
        menuLink: 'createPageVersions',
        menuLogo: 'fa fa-file-alt',
        mainMenuid: {
          id: 400,
          menuname: 'Dynamic Page',
          statusId: 3,
          createdon: 1595961000000,
          updatedon: 1608546640000,
          createdby: 1,
          updatedby: 6,
          menuLogo: 'fa fa-universal-access',
        },
        createdby: 1,
      },
    ],
  },
  {
    menuId: 400,
    menuName: 'Master Report',
    menuImage: 'fa fa-list-alt',
    isEnable: 'Y',
    subMenuList: [
      {
        id: 308,
        menuName: 'Create Master Report',
        menudesc: 'Create New Master Report',
        statusId: 3,
        menuLink: 'createMasterReport',
        menuLogo: 'fas fa-pencil-alt',
        mainMenuid: {
          id: 400,
          menuname: 'Master Report',
          statusId: 3,
          createdon: 1595961000000,
          updatedon: 1608546640000,
          createdby: 1,
          updatedby: 6,
          menuLogo: 'fa fa-list-alt',
        },
        createdby: 1,
      },
      {
        id: 309,
        menuName: 'Generate Master Report',
        menudesc: 'Generate a Master Report',
        statusId: 3,
        menuLink: 'generateMasterReport',
        menuLogo: 'fas fa-file-export',
        mainMenuid: {
          id: 400,
          menuname: 'Master Report',
          statusId: 3,
          createdon: 1595961000000,
          updatedon: 1608546640000,
          createdby: 1,
          updatedby: 6,
          menuLogo: 'fa fa-list-alt',
        },
        createdby: 1,
      },
    ],
  },
  {
    menuId: 401,
    menuName: 'Chart Reports',
    menuImage: 'fa fa-chart-bar',
    isEnable: 'Y',
    subMenuList: [
      {
        id: 311,
        menuName: 'Get Chart Report Data',
        menudesc: 'Get Chart Report Data',
        statusId: 3,
        menuLink: 'getChartReportData',
        menuLogo: 'fas fa-chart-pie',
        mainMenuid: {
          id: 401,
          menuname: 'Chart Reports',
          statusId: 3,
          createdon: 1595961000000,
          updatedon: 1608546640000,
          createdby: 1,
          updatedby: 6,
          menuLogo: 'fa fa-chart-bar',
        },
        createdby: 1,
      },
    ],
  },
];
