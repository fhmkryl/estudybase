using System.Data.Entity.ModelConfiguration;

namespace EStudyBase.Models.Mapping
{
    public class LikeSourceTypeMap : EntityTypeConfiguration<LikeSourceType>
    {
        public LikeSourceTypeMap()
        {
            // Primary Key
            this.HasKey(t => t.LikeSourceTypeId);

            // Properties
            this.Property(t => t.Definition)
                .IsRequired()
                .HasMaxLength(50);

            // Table & Column Mappings
            this.ToTable("LikeSourceType");
            this.Property(t => t.LikeSourceTypeId).HasColumnName("LikeSourceTypeId");
            this.Property(t => t.Definition).HasColumnName("Definition");
        }
    }
}
