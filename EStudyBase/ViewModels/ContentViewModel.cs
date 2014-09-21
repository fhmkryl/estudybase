using System;

namespace EStudyBase.ViewModels
{
    public class ContentViewModel
    {
        public int KeywordId { get; set; }
        public string LanguageDefinition { get; set; }
        public string Description { get; set; }
        public string Url { get; set; }
        public string UserName { get; set; }
        public int ContentId { get; set; }
        public bool Approved { get; set; }
        public int Complaint { get; set; }
        public DateTime CreateDate { get; set; }
        public int ContentTypeId { get; set; }
    }
}