import { LogoutOutlined, MenuFoldOutlined, SettingOutlined } from '@ant-design/icons'
import type { ProSettings } from '@ant-design/pro-components'
import { ProConfigProvider, ProLayout } from '@ant-design/pro-components'
import { Button, ConfigProvider, Dropdown, Flex } from 'antd'
import classnames from 'classnames'
import { useState } from 'react'
import defaultProps from './_defaultProps'
import './Assistant.css'

export default () => {
  const [settings] = useState<Partial<ProSettings> | undefined>({
    fixSiderbar: true,
    // layout: 'mix',
    // splitMenus: true,
  })

  const [pathname, setPathname] = useState('/list/sub-page/sub-sub-page1')
  if (typeof document === 'undefined') {
    return <div />
  }
  return (
    <div id='assistant-pro-layout' className={classnames('w-full', 'h-screen', 'assistant-pro-layout')}>
      <ProConfigProvider hashed={false}>
        <ConfigProvider
          getTargetContainer={() => {
            return document.getElementById('assistant-pro-layout') || document.body
          }}
        >
          <ProLayout
            prefixCls='assistant-prefix'
            bgLayoutImgList={
              [
                // {
                //   src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
                //   left: 85,
                //   bottom: 100,
                //   height: '303px',
                // },
                // {
                //   src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
                //   bottom: -68,
                //   right: -45,
                //   height: '303px',
                // },
                // {
                //   src: 'https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png',
                //   bottom: 0,
                //   left: 0,
                //   width: '331px',
                // },
              ]
            }
            {...defaultProps}
            location={{
              pathname,
            }}
            token={{
              header: {
                colorBgMenuItemSelected: 'rgba(0,0,0,0.04)',
              },
              sider: {
                // paddingInlineLayoutMenu: 0,
                // paddingBlockLayoutMenu: 0,
              },
              pageContainer: {
                paddingBlockPageContainerContent: 0,
                paddingInlinePageContainerContent: 0,
                colorBgPageContainer: '#F5F6FC',
              },
            }}
            siderMenuType='group'
            menu={{
              collapsedShowGroupTitle: true,
            }}
            avatarProps={{
              src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
              size: 'small',
              title: '用户',
              render: (props, dom) => {
                return (
                  <Dropdown
                    menu={{
                      items: [
                        {
                          key: 'logout',
                          icon: <LogoutOutlined />,
                          label: '退出登录',
                        },
                      ],
                    }}
                  >
                    {dom}
                  </Dropdown>
                )
              },
            }}
            actionsRender={props => {
              if (props.isMobile) return []
              if (typeof window === 'undefined') return []
              return [
                <SettingOutlined />,
                // props.layout !== 'side' && document.body.clientWidth > 1400 ? (
                //   <SearchInput />
                // ) : undefined,
                // <InfoCircleFilled key="InfoCircleFilled" />,
                // <QuestionCircleFilled key="QuestionCircleFilled" />,
                // <GithubFilled key="GithubFilled" />,
              ]
            }}
            headerTitleRender={(logo, title, _) => {
              const defaultDom = (
                <>
                  <a>
                    {logo}
                    {title}
                  </a>
                  <Button shape='round' icon={<MenuFoldOutlined />} />
                </>
              )
              if (typeof window === 'undefined') return defaultDom
              if (document.body.clientWidth < 1400) {
                return defaultDom
              }
              if (_.isMobile) return defaultDom
              return (
                <>
                  {defaultDom}
                  {/* <MenuCard /> */}
                </>
              )
            }}
            // menuFooterRender={(props) => {
            //   if (props?.collapsed) return undefined;
            //   return (
            //     <div
            //       style={{
            //         textAlign: 'center',
            //         paddingBlockStart: 12,
            //       }}
            //     >
            //       <div>© 2021 Made with love</div>
            //       <div>by Ant Design</div>
            //     </div>
            //   );
            // }}
            onMenuHeaderClick={e => console.log(e)}
            menuItemRender={(item, dom) => (
              <div
                onClick={() => {
                  setPathname(item.path || '/welcome')
                }}
              >
                {dom}
              </div>
            )}
            {...settings}
          >
            <Flex className='h-full'>
              <div className='main flex-1'>主窗口</div>
              <div className='right min-w-80'>右侧</div>
            </Flex>

            {/* <SettingDrawer
              pathname={pathname}
              enableDarkTheme
              getContainer={(e: any) => {
                if (typeof window === 'undefined') return e
                return document.getElementById('assistant-pro-layout')
              }}
              settings={settings}
              onSettingChange={changeSetting => {
                setSetting(changeSetting)
              }}
              disableUrlParams={false}
            /> */}
          </ProLayout>
        </ConfigProvider>
      </ProConfigProvider>
    </div>
  )
}
