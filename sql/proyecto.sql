USE [master]
GO
/****** Object:  Database [DBPRUEBAS]    Script Date: 2/03/2024 11:47:07 a. m. ******/
CREATE DATABASE [DBPRUEBAS]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'DBPRUEBAS', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER\MSSQL\DATA\DBPRUEBAS.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'DBPRUEBAS_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER\MSSQL\DATA\DBPRUEBAS_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT, LEDGER = OFF
GO
ALTER DATABASE [DBPRUEBAS] SET COMPATIBILITY_LEVEL = 160
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [DBPRUEBAS].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [DBPRUEBAS] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [DBPRUEBAS] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [DBPRUEBAS] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [DBPRUEBAS] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [DBPRUEBAS] SET ARITHABORT OFF 
GO
ALTER DATABASE [DBPRUEBAS] SET AUTO_CLOSE ON 
GO
ALTER DATABASE [DBPRUEBAS] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [DBPRUEBAS] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [DBPRUEBAS] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [DBPRUEBAS] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [DBPRUEBAS] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [DBPRUEBAS] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [DBPRUEBAS] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [DBPRUEBAS] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [DBPRUEBAS] SET  ENABLE_BROKER 
GO
ALTER DATABASE [DBPRUEBAS] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [DBPRUEBAS] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [DBPRUEBAS] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [DBPRUEBAS] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [DBPRUEBAS] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [DBPRUEBAS] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [DBPRUEBAS] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [DBPRUEBAS] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [DBPRUEBAS] SET  MULTI_USER 
GO
ALTER DATABASE [DBPRUEBAS] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [DBPRUEBAS] SET DB_CHAINING OFF 
GO
ALTER DATABASE [DBPRUEBAS] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [DBPRUEBAS] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [DBPRUEBAS] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [DBPRUEBAS] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
ALTER DATABASE [DBPRUEBAS] SET QUERY_STORE = ON
GO
ALTER DATABASE [DBPRUEBAS] SET QUERY_STORE (OPERATION_MODE = READ_WRITE, CLEANUP_POLICY = (STALE_QUERY_THRESHOLD_DAYS = 30), DATA_FLUSH_INTERVAL_SECONDS = 900, INTERVAL_LENGTH_MINUTES = 60, MAX_STORAGE_SIZE_MB = 1000, QUERY_CAPTURE_MODE = AUTO, SIZE_BASED_CLEANUP_MODE = AUTO, MAX_PLANS_PER_QUERY = 200, WAIT_STATS_CAPTURE_MODE = ON)
GO
USE [DBPRUEBAS]
GO
/****** Object:  Table [dbo].[USUARIO]    Script Date: 2/03/2024 11:47:08 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[USUARIO](
	[IdUsuario] [int] IDENTITY(1,1) NOT NULL,
	[DocumentoIdentidad] [varchar](60) NULL,
	[Nombres] [varchar](60) NULL,
	[Telefono] [varchar](60) NULL,
	[Correo] [varchar](60) NULL,
	[Ciudad] [varchar](60) NULL,
	[FechaRegistro] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[IdUsuario] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[USUARIO] ADD  DEFAULT (getdate()) FOR [FechaRegistro]
GO
/****** Object:  StoredProcedure [dbo].[usp_eliminar]    Script Date: 2/03/2024 11:47:08 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

create procedure [dbo].[usp_eliminar](
@idusuario int
)
as
begin

delete from usuario where IdUsuario = @idusuario

end

GO
/****** Object:  StoredProcedure [dbo].[usp_listar]    Script Date: 2/03/2024 11:47:08 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [dbo].[usp_listar]
as
begin

select * from usuario
end


GO
/****** Object:  StoredProcedure [dbo].[usp_modificar]    Script Date: 2/03/2024 11:47:08 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

create procedure [dbo].[usp_modificar](
@idusuario int,
@documentoidentidad varchar(60),
@nombres varchar(60),
@telefono varchar(60),
@correo varchar(60),
@ciudad varchar(60)
)
as
begin

update USUARIO set 
DocumentoIdentidad = @documentoidentidad,
Nombres = @nombres,
Telefono = @telefono,
Correo = @correo,
Ciudad = @ciudad
where IdUsuario = @idusuario

end

GO
/****** Object:  StoredProcedure [dbo].[usp_obtener]    Script Date: 2/03/2024 11:47:08 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

create procedure [dbo].[usp_obtener](@idusuario int)
as
begin

select * from usuario where IdUsuario = @idusuario
end

GO
/****** Object:  StoredProcedure [dbo].[usp_registrar]    Script Date: 2/03/2024 11:47:08 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

--************************ PROCEDIMIENTOS PARA CREAR ************************--
create procedure [dbo].[usp_registrar](
@documentoidentidad varchar(60),
@nombres varchar(60),
@telefono varchar(60),
@correo varchar(60),
@ciudad varchar(60)
)
as
begin

insert into USUARIO(DocumentoIdentidad,Nombres,Telefono,Correo,Ciudad)
values
(
@documentoidentidad,
@nombres,
@telefono,
@correo,
@ciudad
)

end


GO
USE [master]
GO
ALTER DATABASE [DBPRUEBAS] SET  READ_WRITE 
GO
