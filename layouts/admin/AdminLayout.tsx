import React from "react";
import { Grid, Hidden } from "@mui/material";
import "./styles.scss";

type Props = {
  children: React.ReactNode;
};

const AdminLayout = ({ children }: Props) => {
  return (
    <>
      <Grid container className="admin-layout">
        <Grid item xs={0} lg={2.5} xl={2.5} className="admin-layout__sidebar">
          {/* <AdminSidebar /> */}
        </Grid>
        <Grid item xs={12} lg={9.5} xl={9.5} className="admin-layout__main">
          {/* <AdminHeader handleOpenDrawer={handleOpenDrawer} /> */}
          <div className="admin-layout__main-content">{children}</div>
          {/* <AdminFooter /> */}
        </Grid>
      </Grid>
      {/* <Hidden lgUp>
        <AdminDrawer open={open} setOpen={setOpen}>
          <AdminSidebar />
        </AdminDrawer>
      </Hidden>
      <ToastContainer hideProgressBar={true} /> */}
    </>
  );
};

export default AdminLayout;
