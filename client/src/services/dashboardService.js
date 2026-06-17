import API from "./api";



// GET STATS
export const getStats =
  async () => {

    const response =
      await API.get(
        "/dashboard/stats"
      );

    return response.data;
  };




// GET CAMPAIGNS
export const getCampaigns =
  async () => {

    const response =
      await API.get(
        "/dashboard/campaigns"
      );

    return response.data;
  };