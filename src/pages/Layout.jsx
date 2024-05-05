import { useEffect, useState } from 'react';
import {
  HomeOutlined,
  UserOutlined,
  SunOutlined,
  MoonOutlined,
} from '@ant-design/icons';
import { Input, Breadcrumb, Layout, Menu, Switch, theme, ConfigProvider, Select } from 'antd';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CreateUpdateModal from '../component/CreateAndUpdate';
const { Search } = Input;
const { Header, Content, Footer, Sider } = Layout;
const { Option } = Select;
function getItem(
  label,
  key,
  icon,
  children,
) {
  return {
    key,
    icon,
    children,
    label,

  };
}

const onSearch = (value, _e, info) => console.log(info?.source, value);


// eslint-disable-next-line react/prop-types
const LayoutComponent = () => {
  const { t, i18n } = useTranslation();
  const { defaultAlgorithm, darkAlgorithm } = theme;
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [routes, setRoutes] = useState([])
  const [lan, setLan] = useState(i18n.language)
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const lngs = [
    { lang: "en", nativeName: 'English' },
    { lang: "fr", nativeName: 'French' }]
  const {
    token: { borderRadiusLG },
  } = theme.useToken();

  const handleClick = () => {
    setIsDarkMode((previousValue) => !previousValue);
  };

  useEffect(() => {
    const segments = location.pathname.split('/').filter(Boolean);
    const breadcrumbs = segments.map((segment, index) => {
      const cleanedSegment = segment.replace(/[^a-zA-Z0-9]/g, ' ');
      // Capitalize the cleaned segment
      const capitalizedSegment = cleanedSegment.charAt(0).toUpperCase() + cleanedSegment.slice(1);

      if (index === 0 || segment.startsWith('task')) {
        return <Breadcrumb.Item key={index}>{segment}</Breadcrumb.Item>;
      }
      return <Breadcrumb.Item key={index}>{capitalizedSegment}</Breadcrumb.Item>;
    }).filter(Boolean);
    setRoutes(breadcrumbs)
  }, [location])
console.log(routes)
  const changeLanguage = (value) => {
    setLan(value)
    i18n.changeLanguage(value)
  }
  const items = [
    getItem(
      <Link to="/">{t('sidebar.home')}</Link>, '1', <HomeOutlined />),
    getItem(<h1>{t('sidebar.tasks')}</h1>, 'sub1', <UserOutlined />, [
      getItem(<Link to="task/tasks">{t('sidebar.allTasks')}</Link>, '2'),
      getItem(<Link to="task/in-progress">{t('sidebar.inProgress')}</Link>, '3'),
      getItem(<Link to="task/completed">{t('sidebar.completed')}</Link>, '4'),
    ]),
  ];
  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
      }}
    >
      <Layout style={{ minHeight: '100vh' }} className={`${isDarkMode ? "dark" : ""}`}>
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} theme='light'>
          <h1 className='dark:text-white  sm:text-start text-center px-2 text-black text-lg text-center py-3'>Todo</h1>
          <div className="demo-logo-vertical" />
          <Menu className='rounded-none'
            defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
        <Layout >
          <Header className={`flex justify-between sm:min-h-28 sm:pt-4 items-center px-4 lg:pl-8 bg-white dark:bg-black  dark:shadow shadow-white gap-3 sm:gap-1 sm:flex-wrap`} >
            <Search
              placeholder="Search"
              allowClear
              onSearch={onSearch}
              style={{
                width: 304,
              }}
            />
            <div>

              <Switch checkedChildren={<SunOutlined />} unCheckedChildren={<MoonOutlined />} onClick={handleClick} />
              <Select value={lan} onChange={(value) => changeLanguage(value)} className='mx-3'>

                {lngs.map((lng, index) => (
                  <Option key={index} value={lng.lang}> {lng.nativeName} </Option>
                ))}
              </Select>
            </div>
          </Header>
          <Content style={{ margin: '0 16px' }} >
            <Breadcrumb style={{ margin: '16px 0' }}>
              {routes}
            </Breadcrumb>
            {
              !routes.length  ? <CreateUpdateModal task={undefined} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} /> : ''
            }
            <div
              style={{
                padding: 24,
                minHeight: 360,
                borderRadius: borderRadiusLG,
              }}
              className={`   bg-transparent   `}
            >
              <Outlet />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            &copy; {t('sidebar.todo')}  {new Date().getFullYear()} {t('footer.footer')}
          </Footer>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default LayoutComponent;
