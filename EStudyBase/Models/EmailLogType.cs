using System.Collections.Generic;

namespace EStudyBase.Models
{
    public class EmailLogType
    {
        public EmailLogType()
        {
            this.EmailLogs = new List<EmailLog>();    
        }

        public int EmailLogTypeId { get; set; }
        public string Description { get; set; }

        public virtual ICollection<EmailLog> EmailLogs{ get; set; }
    }
}