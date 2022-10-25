/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// @mui icons

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
// import ProfilesList from "examples/Lists/ProfilesList";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";

// Overview page components
import Header from "layouts/profile/components/Header";
import PlatformSettings from "layouts/profile/components/PlatformSettings";

// Images
import analytics1 from "assets/images/alertas-nacionais.jpg";
import analytics2 from "assets/images/mapa-interativo.jpg";
import analytics3 from "assets/images/relacao-busca-caso.jpg";

function Overview() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
      <Header>
        <MDBox mt={5} mb={3}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6} xl={4}>
              <PlatformSettings />
            </Grid>
            <Grid item xs={12} md={6} xl={4} sx={{ display: "flex" }}>
              <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
              <ProfileInfoCard
                info={{
                  nome: "_______________",
                  telefone: "(__) _____-____",
                  Nascimento: "__/__/____",
                  UF: "__",
                  Cidade: "_________",
                  Bairro: "_________",
                  dataNotificação: "__/__/____",
                }}
                social={[]}
                action={{ route: "", tooltip: "Edit Profile" }}
                shadow={false}
              />
              <Divider orientation="vertical" sx={{ mx: 0 }} />
            </Grid>
          </Grid>
        </MDBox>
        <MDBox pt={2} px={2} lineHeight={1.25}>
          <MDTypography variant="h6" fontWeight="medium">
            Analytics
          </MDTypography>
          <MDBox mb={1}>
            <MDTypography variant="button" color="text">
              Dados coletados e agrupados por busca no Google
            </MDTypography>
          </MDBox>
        </MDBox>
        <MDBox p={2}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6} xl={3}>
              <DefaultProjectCard
                image={analytics1}
                label=""
                title="Alertas de buscas Nacionais"
                description="Sintomas (febre amarela) mais pesquisados no Brasil"
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "Explorar",
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={2.61}>
              <DefaultProjectCard
                image={analytics2}
                label=""
                title="Indicativos nacionais"
                description="Sintomas (febre amarela) mais buscados em cada região"
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "Explorar",
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={2.61}>
              <DefaultProjectCard
                image={analytics3}
                label=""
                title="Relação de buscas x casos"
                description="Buscas relacionadas a febre amarela e quantidade de casos"
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "Explorar",
                }}
              />
            </Grid>
          </Grid>
        </MDBox>
      </Header>
      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
