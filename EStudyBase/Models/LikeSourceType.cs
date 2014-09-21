using System.Collections.Generic;

namespace EStudyBase.Models
{
    public class LikeSourceType
    {
        public int LikeSourceTypeId { get; set; }
        public string Definition { get; set; }
        public virtual ICollection<Like> Likes { get; set; }
    }
}
