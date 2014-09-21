using System.Collections.Generic;
using EStudyBase.Models;

namespace EStudyBase.ViewModels
{
    public class UserPortfolioViewModel
    {
        public int UserId { get; set; }
        public string UserName { get; set; }
        public ICollection<Keyword> Keywords { get; set; }
        public ICollection<Content> Contents { get; set; }
    }
}