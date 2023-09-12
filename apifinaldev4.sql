-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 12/09/2023 às 19:47
-- Versão do servidor: 10.4.28-MariaDB
-- Versão do PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `apifinaldev4`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `bitacoras`
--

CREATE TABLE `bitacoras` (
  `idbitacora` bigint(20) UNSIGNED NOT NULL,
  `idusuario` bigint(20) UNSIGNED NOT NULL,
  `fecha` date NOT NULL,
  `hora` time NOT NULL,
  `ip` varchar(45) NOT NULL,
  `so` varchar(255) NOT NULL,
  `navegador` varchar(255) NOT NULL,
  `usuario` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `bitacoras`
--

INSERT INTO `bitacoras` (`idbitacora`, `idusuario`, `fecha`, `hora`, `ip`, `so`, `navegador`, `usuario`, `created_at`, `updated_at`) VALUES
(1, 1, '2023-09-10', '19:47:00', '192.168.1.100', 'Windows 10', 'Chrome', 'david admin', '2023-09-11 01:49:19', '2023-09-11 01:49:19'),
(2, 1, '2023-09-12', '12:34:00', '192.168.1.100', 'Windows 10', 'Chrome', 'david', '2023-09-12 18:36:13', '2023-09-12 18:36:13'),
(3, 1, '2023-09-12', '15:46:16', '127.0.0.1', 'Windows 10', 'Chrome', 'david', '2023-09-12 18:46:16', '2023-09-12 18:46:16'),
(4, 1, '2023-09-12', '15:48:11', '127.0.0.1', 'Windows 10', 'Chrome', 'david', '2023-09-12 18:48:11', '2023-09-12 18:48:11'),
(5, 1, '2023-09-12', '15:49:39', '127.0.0.1', 'Windows 10', 'Chrome', 'david', '2023-09-12 18:49:39', '2023-09-12 18:49:39'),
(7, 1, '2023-09-12', '15:52:04', '127.0.0.1', 'Windows 10', 'Chrome', 'david', '2023-09-12 18:52:04', '2023-09-12 18:52:04'),
(8, 1, '2023-09-12', '15:52:33', '127.0.0.1', 'Windows 10', 'Chrome', 'david', '2023-09-12 18:52:33', '2023-09-12 18:52:33'),
(9, 1, '2023-09-12', '15:52:56', '127.0.0.1', 'Windows 10', 'Chrome', 'david', '2023-09-12 18:52:56', '2023-09-12 18:52:56'),
(10, 1, '2023-09-12', '12:54:02', '127.0.0.1', 'Windows 10', 'Chrome', 'david', '2023-09-12 18:54:02', '2023-09-12 18:54:02'),
(11, 12, '2023-09-12', '12:57:20', '127.0.0.1', 'Windows 10', 'Chrome', 'david', '2023-09-12 18:57:20', '2023-09-12 18:57:20'),
(12, 12, '2023-09-12', '12:58:40', '127.0.0.1', 'Windows 10', 'Chrome', 'Yusleisbis336@gmail.com', '2023-09-12 18:58:40', '2023-09-12 18:58:40'),
(13, 1, '2023-09-12', '12:59:28', '127.0.0.1', 'Windows 10', 'Chrome', 'david', '2023-09-12 18:59:28', '2023-09-12 18:59:28'),
(15, 1, '2023-09-12', '13:28:35', '127.0.0.1', 'Windows 10', 'Chrome', 'david', '2023-09-12 19:28:35', '2023-09-12 19:28:35'),
(16, 12, '2023-09-12', '14:17:20', '127.0.0.1', 'Windows 10', 'Chrome', 'Yusleisbis336@gmail.com', '2023-09-12 20:17:20', '2023-09-12 20:17:20'),
(17, 1, '2023-09-12', '14:19:31', '127.0.0.1', 'Windows 10', 'Chrome', 'david', '2023-09-12 20:19:31', '2023-09-12 20:19:31'),
(18, 12, '2023-09-12', '14:28:09', '127.0.0.1', 'Windows 10', 'Chrome', 'Yusleisbis336@gmail.com', '2023-09-12 20:28:09', '2023-09-12 20:28:09'),
(19, 1, '2023-09-12', '14:29:24', '127.0.0.1', 'Windows 10', 'Chrome', 'david', '2023-09-12 20:29:24', '2023-09-12 20:29:24'),
(20, 12, '2023-09-12', '14:44:48', '127.0.0.1', 'Windows 10', 'Chrome', 'Yusleisbis336@gmail.com', '2023-09-12 20:44:48', '2023-09-12 20:44:48');

-- --------------------------------------------------------

--
-- Estrutura para tabela `enlaces`
--

CREATE TABLE `enlaces` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `idrol` bigint(20) UNSIGNED NOT NULL,
  `idpagina` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `enlaces`
--

INSERT INTO `enlaces` (`id`, `idrol`, `idpagina`, `created_at`, `updated_at`) VALUES
(1, 1, 1, '2023-09-11 01:59:53', '2023-09-11 01:59:53');

-- --------------------------------------------------------

--
-- Estrutura para tabela `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(37, '2014_10_12_000000_create_users_table', 1),
(38, '2014_10_12_100000_create_password_resets_table', 1),
(39, '2019_08_19_000000_create_failed_jobs_table', 1),
(40, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(41, '2023_09_08_153655_create_personas_table', 1),
(42, '2023_09_08_153733_create_roles_table', 1),
(43, '2023_09_08_153839_create_usuarios_table', 1),
(44, '2023_09_08_153840_create_bitacoras_table', 1),
(45, '2023_09_08_153852_create_paginas_table', 1),
(46, '2023_09_08_153915_create_enlaces_table', 1);

-- --------------------------------------------------------

--
-- Estrutura para tabela `paginas`
--

CREATE TABLE `paginas` (
  `idpagina` bigint(20) UNSIGNED NOT NULL,
  `url` varchar(255) NOT NULL,
  `estado` varchar(255) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `icono` varchar(255) DEFAULT NULL,
  `tipo` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `paginas`
--

INSERT INTO `paginas` (`idpagina`, `url`, `estado`, `nombre`, `descripcion`, `icono`, `tipo`, `created_at`, `updated_at`) VALUES
(1, 'http://localhost:hello.com', 'activo', 'Hello', 'Descripción de la página', 'hello', 'user-page', '2023-09-11 01:57:54', '2023-09-11 01:57:54');

-- --------------------------------------------------------

--
-- Estrutura para tabela `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `personas`
--

CREATE TABLE `personas` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `primernombre` varchar(255) NOT NULL,
  `segundonombre` varchar(255) DEFAULT NULL,
  `primerapellido` varchar(255) NOT NULL,
  `segundoapellido` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `personas`
--

INSERT INTO `personas` (`id`, `primernombre`, `segundonombre`, `primerapellido`, `segundoapellido`, `created_at`, `updated_at`) VALUES
(1, 'Anibal', 'David', 'Carreño', 'Alvarez', NULL, NULL);

-- --------------------------------------------------------

--
-- Estrutura para tabela `roles`
--

CREATE TABLE `roles` (
  `idrol` bigint(20) UNSIGNED NOT NULL,
  `rol` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `roles`
--

INSERT INTO `roles` (`idrol`, `rol`, `created_at`, `updated_at`) VALUES
(1, 'Admin', NULL, NULL),
(2, 'User', NULL, NULL),
(5, 'Real Rol', '2023-09-11 23:04:51', '2023-09-11 23:04:51'),
(6, 'New Rol', '2023-09-12 16:52:41', '2023-09-12 16:52:41');

-- --------------------------------------------------------

--
-- Estrutura para tabela `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuarios`
--

CREATE TABLE `usuarios` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `idpersona` bigint(20) UNSIGNED DEFAULT NULL,
  `usuario` varchar(255) NOT NULL,
  `clave` varchar(255) NOT NULL,
  `habilitado` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `idrol` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `usuarios`
--

INSERT INTO `usuarios` (`id`, `idpersona`, `usuario`, `clave`, `habilitado`, `created_at`, `updated_at`, `idrol`) VALUES
(1, 1, 'david', 'adca2003', 1, '2023-09-11 01:38:47', '2023-09-12 20:38:20', 1),
(2, NULL, 'Ivan', 'ivan123', 1, NULL, NULL, 2),
(5, NULL, 'jose1234', 'jose123', 1, '2023-09-11 19:10:34', '2023-09-11 21:33:47', 2),
(6, NULL, 'andres222', 'andres444', 1, '2023-09-11 19:16:06', '2023-09-11 19:16:06', 2),
(7, NULL, 'anamaria2', 'ana1232', 1, '2023-09-11 20:27:37', '2023-09-11 21:35:01', 1),
(8, NULL, 'carlos123', 'carlos12', 1, '2023-09-11 21:36:55', '2023-09-11 21:36:55', 2),
(9, NULL, 'nombre_de_usuario', 'nombre1', 1, '2023-09-12 00:04:28', '2023-09-12 00:04:28', 2),
(10, NULL, 'nombre_de_usuario2', 'contraseña2', 1, '2023-09-12 00:34:41', '2023-09-12 00:34:41', 2),
(12, NULL, 'Yusleisbis336@gmail.com4', '753215987', 1, '2023-09-12 00:42:02', '2023-09-12 20:45:19', 2),
(13, NULL, 'Yus', '77', 1, '2023-09-12 00:42:35', '2023-09-12 00:42:35', 2),
(14, NULL, 'juancarlos', 'juan123', 1, '2023-09-12 16:54:38', '2023-09-12 16:54:38', 2),
(15, NULL, 'jonhwick', 'jon123', 1, '2023-09-12 17:01:17', '2023-09-12 17:01:17', 2),
(16, NULL, 'jonhwick2', 'jon1232', 1, '2023-09-12 17:19:38', '2023-09-12 17:19:38', 2),
(17, NULL, 'jonhwick3', 'jon1233', 1, '2023-09-12 17:20:26', '2023-09-12 17:20:26', 2),
(18, NULL, 'Yusleisbis336@gmail.com2', '7532159872', 1, '2023-09-12 17:26:16', '2023-09-12 17:26:16', 2),
(19, NULL, 'Yusleisbis336@gmail.com3', '7532159873', 1, '2023-09-12 17:27:16', '2023-09-12 17:27:16', 2);

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `bitacoras`
--
ALTER TABLE `bitacoras`
  ADD PRIMARY KEY (`idbitacora`),
  ADD KEY `bitacoras_idusuario_foreign` (`idusuario`);

--
-- Índices de tabela `enlaces`
--
ALTER TABLE `enlaces`
  ADD PRIMARY KEY (`id`),
  ADD KEY `enlaces_idrol_foreign` (`idrol`),
  ADD KEY `enlaces_idpagina_foreign` (`idpagina`);

--
-- Índices de tabela `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Índices de tabela `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `paginas`
--
ALTER TABLE `paginas`
  ADD PRIMARY KEY (`idpagina`),
  ADD UNIQUE KEY `paginas_url_unique` (`url`);

--
-- Índices de tabela `password_resets`
--
ALTER TABLE `password_resets`
  ADD PRIMARY KEY (`email`);

--
-- Índices de tabela `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Índices de tabela `personas`
--
ALTER TABLE `personas`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`idrol`),
  ADD UNIQUE KEY `roles_rol_unique` (`rol`);

--
-- Índices de tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Índices de tabela `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `usuarios_usuario_unique` (`usuario`),
  ADD KEY `usuarios_idpersona_foreign` (`idpersona`),
  ADD KEY `usuarios_idrol_foreign` (`idrol`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `bitacoras`
--
ALTER TABLE `bitacoras`
  MODIFY `idbitacora` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de tabela `enlaces`
--
ALTER TABLE `enlaces`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT de tabela `paginas`
--
ALTER TABLE `paginas`
  MODIFY `idpagina` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `personas`
--
ALTER TABLE `personas`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `roles`
--
ALTER TABLE `roles`
  MODIFY `idrol` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `bitacoras`
--
ALTER TABLE `bitacoras`
  ADD CONSTRAINT `bitacoras_idusuario_foreign` FOREIGN KEY (`idusuario`) REFERENCES `usuarios` (`id`);

--
-- Restrições para tabelas `enlaces`
--
ALTER TABLE `enlaces`
  ADD CONSTRAINT `enlaces_idpagina_foreign` FOREIGN KEY (`idpagina`) REFERENCES `paginas` (`idpagina`),
  ADD CONSTRAINT `enlaces_idrol_foreign` FOREIGN KEY (`idrol`) REFERENCES `roles` (`idrol`);

--
-- Restrições para tabelas `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_idpersona_foreign` FOREIGN KEY (`idpersona`) REFERENCES `personas` (`id`),
  ADD CONSTRAINT `usuarios_idrol_foreign` FOREIGN KEY (`idrol`) REFERENCES `roles` (`idrol`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
