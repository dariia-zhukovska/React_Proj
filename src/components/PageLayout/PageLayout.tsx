import React from 'react';
import styles from './PageLayout.module.css';
import TabBar from '../TabBar/TabBar';
import SideBar from '../SideBar/SideBar';
import MainContentArea from '../MainContentArea/MainContentArea';

function PageLayout() {
  return (
    <div className={styles.pageLayout}>
      <TabBar />
      <SideBar />
      <MainContentArea />
    </div>
  );
}

export default PageLayout;
