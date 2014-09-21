using System.Data.Entity.ModelConfiguration;

namespace EStudyBase.Models.Mapping
{
    public class ContentTypeMap : EntityTypeConfiguration<ContentType>
    {
        public ContentTypeMap()
        {
            // Primary Key
            this.HasKey(t => t.ContentTypeId);

            // Properties
            this.Property(t => t.ShortDescription)
                .IsRequired()
                .HasMaxLength(50);

            // Table & Column Mappings
            this.ToTable("ContentType");
            this.Property(t => t.ContentTypeId).HasColumnName("ContentTypeId");
            this.Property(t => t.ShortDescription).HasColumnName("ShortDescription");
        }
    }
}