﻿using System.Data.Entity.ModelConfiguration;

namespace EStudyBase.Models.Mapping
{
    public class EmailLogTypeMap : EntityTypeConfiguration<EmailLogType>
    {
        public EmailLogTypeMap()
        {
            // Primary Key
            this.HasKey(t => t.EmailLogTypeId);

            // Properties
            this.Property(t => t.Description)
                .IsRequired()
                .HasMaxLength(200);

            // Table & Column Mappings
            this.ToTable("EmailLogType");
            this.Property(t => t.EmailLogTypeId).HasColumnName("EmailLogTypeId");
            this.Property(t => t.Description).HasColumnName("Description");
        }
    }
}