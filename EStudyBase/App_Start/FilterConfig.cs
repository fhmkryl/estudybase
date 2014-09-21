using System.Web;
using System.Web.Mvc;
using EStudyBase.Attributes;

namespace EStudyBase
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new ElmahHandleErrorAttribute());
            filters.Add(new HandleErrorAttribute());
        }
    }
}