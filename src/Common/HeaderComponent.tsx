import React from "react";
import { Fragment } from "react";
import { BannerComponent } from "./BannerComponent";
import { UserInfonComponent } from "./UserInfoComponent";
import { PCMMAppsComponent } from "./ApplicationsComponent";
import { PCMMMenuComponent, UserAdminMenuComponent } from "./MenuComponent";

export const HeaderComponent = () => {
  return (
    <Fragment>
      <BannerComponent />
      <section className="fade"></section>
      <UserInfonComponent />
      <PCMMAppsComponent isPcmm={true} />
      <PCMMMenuComponent showMenu={true} />
      {/* <UserAdminMenuComponent showMenu={true} /> */}
    </Fragment>
  );
};
