using System.ComponentModel.DataAnnotations;

namespace WebAPIAssessment.Models
{
    public class Movie
    {
        [Key]
        public int Movie_id { get; set; }
        public string? Movie_name { get; set; }
        public string? StarCast { get; set; }
        public string? Director { get; set; }
        public string? ReleaseDate { get; set; }
        public string? Producer { get; set; }

    }
}
