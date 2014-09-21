using System.Web.Security;
using EStudyBase.Models;
using WebMatrix.WebData;

namespace EStudyBase.Migrations
{
    using System.Data.Entity.Migrations;

    internal sealed class Configuration : DbMigrationsConfiguration<EStudyBaseContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(EStudyBaseContext context)
        {
            //...
            // Init membership connection
            WebSecurity.InitializeDatabaseConnection("DefaultConnection",
                                                     "UserProfile", "UserId", "UserName", autoCreateTables: true);
            //...
            // Create roles
            if (!Roles.RoleExists("Admin"))
            {
                Roles.CreateRole("Admin");
            }
            if (!Roles.RoleExists("Moderator"))
            {
                Roles.CreateRole("Moderator");
            }
            if (!Roles.RoleExists("Standart"))
            {
                Roles.CreateRole("Standart");
            }

            //...
            // Add users to roles
            if (!Roles.IsUserInRole("fhmkryl","Admin"))
            {
                Roles.AddUserToRole("fhmkryl", "Admin");
            }
        }
    }
}
