using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WebAPIAssessment.Migrations
{
    public partial class seconfmig : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "producer",
                table: "Movie",
                newName: "Producer");

            migrationBuilder.RenameColumn(
                name: "StartCast",
                table: "Movie",
                newName: "StarCast");

            migrationBuilder.AlterColumn<string>(
                name: "ReleaseDate",
                table: "Movie",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "datetime2");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Producer",
                table: "Movie",
                newName: "producer");

            migrationBuilder.RenameColumn(
                name: "StarCast",
                table: "Movie",
                newName: "StartCast");

            migrationBuilder.AlterColumn<DateTime>(
                name: "ReleaseDate",
                table: "Movie",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);
        }
    }
}
