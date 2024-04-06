﻿using Microsoft.EntityFrameworkCore;
using Practica.Models;

namespace Practica.Context
{
    public class AppDbContext: DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    }
    public DbSet<Usuario> Usuarios {  get; set; }  

}
