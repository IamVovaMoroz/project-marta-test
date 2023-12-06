// module.exports = ({ env }) => {
//     // know if we want to serve the admin panel
//     // if not, we want to know the absolute URL of the admin panel (admin.artcoded.net)

//     return {
//       url: env("PUBLIC_ADMIN_URL", "/dashboard"),
//       serveAdminPanel: env("PUBLIC_ADMIN_URL") == undefined,
//     };
//   };

module.exports = ({ env }) => ({
  auth: {
    secret: env('API_TOKEN1', '3005f8e3851d45c9e8e012f5e63bfdf2')
  },
  url: '/dashboard' // localhost:1337/dashboard
})
