# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: localhost (MySQL 5.7.21)
# Database: boilerplate
# Generation Time: 2018-12-10 21:48:34 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table bigtree_404s
# ------------------------------------------------------------

DROP TABLE IF EXISTS `bigtree_404s`;

CREATE TABLE `bigtree_404s` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `broken_url` varchar(1024) NOT NULL DEFAULT '',
  `get_vars` varchar(1024) NOT NULL DEFAULT '',
  `redirect_url` varchar(1024) NOT NULL DEFAULT '',
  `requests` int(11) unsigned NOT NULL DEFAULT '0',
  `ignored` char(2) NOT NULL DEFAULT '',
  `site_key` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `broken_url` (`broken_url`(255)),
  KEY `requests` (`requests`),
  KEY `ignored` (`ignored`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table bigtree_audit_trail
# ------------------------------------------------------------

DROP TABLE IF EXISTS `bigtree_audit_trail`;

CREATE TABLE `bigtree_audit_trail` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user` int(11) unsigned NOT NULL,
  `table` varchar(255) NOT NULL,
  `entry` varchar(255) NOT NULL DEFAULT '',
  `type` varchar(255) NOT NULL,
  `date` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user` (`user`),
  KEY `table` (`table`),
  KEY `entry` (`entry`),
  KEY `date` (`date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `bigtree_audit_trail` WRITE;
/*!40000 ALTER TABLE `bigtree_audit_trail` DISABLE KEYS */;

INSERT INTO `bigtree_audit_trail` (`id`, `user`, `table`, `entry`, `type`, `date`)
VALUES
	(1,1,'bigtree_callout_groups','1','created','2018-08-02 14:06:34'),
	(2,1,'bigtree_callout_groups','2','created','2018-08-02 14:06:39'),
	(3,1,'bigtree_callout_groups','3','created','2018-08-02 14:06:42'),
	(4,1,'bigtree_callout_groups','4','created','2018-08-02 14:06:56'),
	(5,1,'bigtree_templates','full','created','2018-08-02 14:08:00'),
	(6,1,'bigtree_templates','home','updated','2018-08-02 14:16:23'),
	(7,1,'bigtree_templates','content','updated','2018-08-02 14:17:09'),
	(8,1,'bigtree_module_views','1','created','2018-08-02 14:19:31'),
	(9,1,'bigtree_module_views','2','created','2018-08-02 14:19:31'),
	(10,1,'bigtree_module_forms','1','created','2018-08-02 14:19:31'),
	(11,1,'bigtree_module_forms','2','created','2018-08-02 14:19:31'),
	(12,1,'bigtree_module_actions','1','created','2018-08-02 14:19:32'),
	(13,1,'bigtree_module_actions','2','created','2018-08-02 14:19:32'),
	(14,1,'bigtree_module_actions','3','created','2018-08-02 14:19:32'),
	(15,1,'bigtree_module_actions','4','created','2018-08-02 14:19:32'),
	(16,1,'bigtree_module_actions','5','created','2018-08-02 14:19:32'),
	(17,1,'bigtree_module_actions','6','created','2018-08-02 14:19:32'),
	(18,1,'bigtree_module_actions','7','created','2018-08-02 14:19:32'),
	(19,1,'bigtree_module_actions','8','created','2018-08-02 14:19:32'),
	(20,1,'bigtree_module_views','3','created','2018-08-02 14:19:36'),
	(21,1,'bigtree_module_actions','9','created','2018-08-02 14:19:36'),
	(22,1,'bigtree_module_actions','10','created','2018-08-02 14:19:36'),
	(23,1,'bigtree_module_actions','11','created','2018-08-02 14:19:36'),
	(24,1,'bigtree_module_views','4','created','2018-08-02 14:20:11'),
	(25,1,'bigtree_module_actions','12','created','2018-08-02 14:20:11'),
	(26,1,'bigtree_module_actions','13','created','2018-08-02 14:20:11'),
	(27,1,'bigtree_module_actions','14','created','2018-08-02 14:20:11'),
	(28,1,'bigtree_callouts','home-feature','created','2018-08-02 14:23:47'),
	(29,1,'bigtree_templates','home','updated','2018-08-02 14:24:12'),
	(30,1,'bigtree_settings','nav-secondary','created','2018-08-02 14:28:25'),
	(31,1,'bigtree_settings','nav-footer','created','2018-08-02 14:29:17'),
	(32,1,'bigtree_settings','nav-social','created','2018-08-02 14:31:40'),
	(33,1,'bigtree_settings','nav-social','updated','2018-08-02 14:31:55'),
	(34,1,'bigtree_settings','nav-footer','updated','2018-08-02 14:32:29'),
	(35,1,'bigtree_settings','nav-secondary','updated','2018-08-02 14:32:38'),
	(36,1,'bigtree_settings','com.fastspot.form-builder*settings','created','2018-08-02 14:36:30'),
	(37,1,'bigtree_templates','search','created','2018-08-02 14:37:43'),
	(38,1,'bigtree_pages','1','created','2018-08-02 14:37:57'),
	(39,1,'bigtree_templates','search','updated','2018-08-02 14:39:13'),
	(40,1,'bigtree_templates','search','updated','2018-08-02 14:43:21'),
	(41,1,'bigtree_pages','1','updated','2018-08-02 14:43:25'),
	(42,1,'bigtree_callouts','wysiwyg','created','2018-08-02 14:45:12'),
	(43,1,'bigtree_callout_groups','1','updated','2018-08-02 14:51:06'),
	(44,1,'bigtree_callout_groups','2','updated','2018-08-02 14:51:11'),
	(45,1,'bigtree_settings','404-page-header','created','2018-08-02 14:54:34'),
	(46,1,'bigtree_settings','404-page-content','created','2018-08-02 14:54:45'),
	(47,1,'bigtree_callouts','topic-rows','created','2018-08-02 15:13:14'),
	(48,1,'bigtree_callouts','topic-row','created','2018-08-02 15:17:11'),
	(49,1,'bigtree_callout_groups','2','updated','2018-08-02 15:17:31'),
	(50,1,'bigtree_callouts','topic-row','updated','2018-08-02 15:18:07'),
	(51,1,'bigtree_callouts','link-list','created','2018-08-02 15:25:16'),
	(52,1,'bigtree_callout_groups','2','updated','2018-08-02 15:25:22'),
	(53,1,'bigtree_callouts','link-list','updated','2018-08-02 15:25:52'),
	(54,1,'bigtree_callouts','link-list','updated','2018-08-02 15:27:34'),
	(55,1,'bigtree_callouts','link-list','updated','2018-08-02 15:28:25'),
	(56,1,'bigtree_callouts','link-list','updated','2018-08-02 15:29:35'),
	(57,1,'bigtree_modules','modules-15c0edde04cdec','updated','2018-08-02 15:43:15'),
	(58,1,'bigtree_module_forms','3','updated','2018-08-02 15:44:04'),
	(59,1,'bigtree_module_forms','3','updated','2018-08-02 15:51:25'),
	(60,1,'bigtree_callouts','media-gallery','created','2018-08-02 16:22:50'),
	(61,1,'bigtree_callouts','media-gallery','updated','2018-08-03 10:26:32'),
	(62,1,'bigtree_callouts','contact-info','created','2018-08-03 10:53:20'),
	(63,1,'bigtree_callouts','contact-info','updated','2018-08-03 10:57:35'),
	(64,1,'bigtree_callout_groups','1','updated','2018-08-03 10:57:41'),
	(65,1,'bigtree_callout_groups','2','updated','2018-08-03 10:58:14'),
	(66,1,'bigtree_callouts','facts-stats','created','2018-08-03 11:36:23'),
	(67,1,'bigtree_callout_groups','1','updated','2018-08-03 11:36:27'),
	(68,1,'bigtree_callouts','flexible-callouts','created','2018-08-03 11:45:53'),
	(69,1,'bigtree_callout_groups','1','updated','2018-08-03 11:46:02'),
	(70,1,'bigtree_callouts','testimonial','created','2018-08-03 11:57:41'),
	(71,1,'bigtree_callout_groups','1','updated','2018-08-03 11:57:48'),
	(72,1,'bigtree_callouts','testimonial','updated','2018-08-03 12:05:45'),
	(73,1,'bigtree_callouts','topic-row','updated','2018-08-03 12:06:38'),
	(74,1,'bigtree_callouts','topic-rows','updated','2018-08-03 12:06:56'),
	(75,1,'bigtree_callouts','flexible-callout','updated','2018-08-03 12:07:15'),
	(76,1,'bigtree_callouts','link-list','updated','2018-08-03 12:07:55'),
	(77,1,'bigtree_module_forms','1','updated','2018-08-03 12:09:38'),
	(78,1,'bigtree_module_views','1','updated','2018-08-03 12:09:45'),
	(79,1,'bigtree_templates','events','created','2018-08-03 14:02:20'),
	(80,1,'bigtree_templates','news','created','2018-08-03 14:02:26'),
	(81,1,'bigtree_module_groups','1','created','2018-08-03 14:25:05'),
	(82,1,'bigtree_modules','modules-15c0edde04d8fa','created','2018-08-03 14:25:05'),
	(83,1,'bigtree_module_forms','4','created','2018-08-03 14:27:40'),
	(84,1,'bigtree_module_actions','18','created','2018-08-03 14:27:40'),
	(85,1,'bigtree_module_actions','19','created','2018-08-03 14:27:40'),
	(86,1,'bigtree_module_views','6','created','2018-08-03 14:27:55'),
	(87,1,'bigtree_module_actions','20','created','2018-08-03 14:27:55'),
	(88,1,'bigtree_modules','modules-15c0edde04e4e5','created','2018-08-03 14:28:16'),
	(89,1,'bigtree_module_forms','5','created','2018-08-03 14:28:57'),
	(90,1,'bigtree_module_actions','21','created','2018-08-03 14:28:57'),
	(91,1,'bigtree_module_actions','22','created','2018-08-03 14:28:57'),
	(92,1,'bigtree_module_views','7','created','2018-08-03 14:29:12'),
	(93,1,'bigtree_module_actions','23','created','2018-08-03 14:29:12'),
	(94,1,'bigtree_module_forms','4','updated','2018-08-03 14:32:38'),
	(95,1,'bigtree_module_forms','5','updated','2018-08-03 14:33:26'),
	(96,1,'bigtree_module_forms','4','updated','2018-08-03 14:33:37'),
	(97,1,'bigtree_module_forms','4','updated','2018-08-03 14:33:59'),
	(98,1,'bigtree_templates','news','updated','2018-08-03 14:52:15'),
	(99,1,'bigtree_module_forms','2','updated','2018-08-03 15:14:04'),
	(100,1,'bigtree_module_forms','4','updated','2018-08-03 15:14:28'),
	(101,1,'bigtree_module_forms','4','updated','2018-08-03 15:14:51'),
	(102,1,'bigtree_module_forms','2','updated','2018-08-03 15:15:09'),
	(103,1,'bigtree_module_forms','2','updated','2018-08-03 15:16:17'),
	(104,1,'bigtree_module_forms','2','updated','2018-08-03 16:18:51'),
	(105,1,'bigtree_module_forms','4','updated','2018-08-03 16:19:05'),
	(106,1,'bigtree_module_forms','2','updated','2018-08-03 16:31:07'),
	(107,1,'bigtree_module_forms','2','updated','2018-08-03 16:33:47'),
	(108,1,'jsondb -&gt; extensions','com.fastspot.events','deleted','2018-12-10 16:43:08'),
	(109,1,'jsondb -&gt; module-views','views-15c0eddf6279e4','created','2018-12-10 16:43:18'),
	(110,1,'jsondb -&gt; module-views','views-15c0eddf62a536','created','2018-12-10 16:43:18'),
	(111,1,'jsondb -&gt; module-views','views-15c0eddf635aee','created','2018-12-10 16:43:18'),
	(112,1,'jsondb -&gt; module-forms','forms-15c0eddf649ef8','created','2018-12-10 16:43:18'),
	(113,1,'jsondb -&gt; module-forms','forms-15c0eddf656bda','created','2018-12-10 16:43:18'),
	(114,1,'jsondb -&gt; module-forms','forms-15c0eddf661b06','created','2018-12-10 16:43:18'),
	(115,1,'jsondb -&gt; module-actions','actions-15c0eddf66f0d4','created','2018-12-10 16:43:18'),
	(116,1,'jsondb -&gt; module-actions','actions-15c0eddf66f943','created','2018-12-10 16:43:18'),
	(117,1,'jsondb -&gt; module-actions','actions-15c0eddf679ae0','created','2018-12-10 16:43:18'),
	(118,1,'jsondb -&gt; module-actions','actions-15c0eddf683cd7','created','2018-12-10 16:43:18'),
	(119,1,'jsondb -&gt; module-actions','actions-15c0eddf68e1a6','created','2018-12-10 16:43:18'),
	(120,1,'jsondb -&gt; module-actions','actions-15c0eddf69486a','created','2018-12-10 16:43:18'),
	(121,1,'jsondb -&gt; module-actions','actions-15c0eddf69ae87','created','2018-12-10 16:43:18'),
	(122,1,'jsondb -&gt; module-actions','actions-15c0eddf6a7575','created','2018-12-10 16:43:18'),
	(123,1,'jsondb -&gt; module-actions','actions-15c0eddf6adf66','created','2018-12-10 16:43:18'),
	(124,1,'jsondb -&gt; module-actions','actions-15c0eddf6b4a6c','created','2018-12-10 16:43:18');

/*!40000 ALTER TABLE `bigtree_audit_trail` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table bigtree_caches
# ------------------------------------------------------------

DROP TABLE IF EXISTS `bigtree_caches`;

CREATE TABLE `bigtree_caches` (
  `identifier` varchar(255) NOT NULL DEFAULT '',
  `key` varchar(10000) NOT NULL DEFAULT '',
  `value` longtext,
  `timestamp` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  KEY `identifier` (`identifier`),
  KEY `key` (`key`(255)),
  KEY `timestamp` (`timestamp`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table bigtree_locks
# ------------------------------------------------------------

DROP TABLE IF EXISTS `bigtree_locks`;

CREATE TABLE `bigtree_locks` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user` int(11) unsigned NOT NULL,
  `table` varchar(255) NOT NULL,
  `item_id` varchar(255) NOT NULL,
  `last_accessed` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `title` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user` (`user`),
  KEY `table` (`table`),
  KEY `item_id` (`item_id`),
  CONSTRAINT `bigtree_locks_ibfk_1` FOREIGN KEY (`user`) REFERENCES `bigtree_users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `bigtree_locks` WRITE;
/*!40000 ALTER TABLE `bigtree_locks` DISABLE KEYS */;

INSERT INTO `bigtree_locks` (`id`, `user`, `table`, `item_id`, `last_accessed`, `title`)
VALUES
	(2,1,'bigtree_pages','','2018-08-02 14:43:15','Page');

/*!40000 ALTER TABLE `bigtree_locks` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table bigtree_login_attempts
# ------------------------------------------------------------

DROP TABLE IF EXISTS `bigtree_login_attempts`;

CREATE TABLE `bigtree_login_attempts` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `ip` int(11) DEFAULT NULL,
  `user` int(11) DEFAULT NULL,
  `timestamp` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table bigtree_login_bans
# ------------------------------------------------------------

DROP TABLE IF EXISTS `bigtree_login_bans`;

CREATE TABLE `bigtree_login_bans` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `ip` int(11) DEFAULT NULL,
  `user` int(11) DEFAULT NULL,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `expires` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table bigtree_messages
# ------------------------------------------------------------

DROP TABLE IF EXISTS `bigtree_messages`;

CREATE TABLE `bigtree_messages` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `sender` int(11) unsigned NOT NULL,
  `recipients` text NOT NULL,
  `read_by` text NOT NULL,
  `subject` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `response_to` int(11) unsigned NOT NULL,
  `date` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sender` (`sender`),
  CONSTRAINT `bigtree_messages_ibfk_1` FOREIGN KEY (`sender`) REFERENCES `bigtree_users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table bigtree_module_view_cache
# ------------------------------------------------------------

DROP TABLE IF EXISTS `bigtree_module_view_cache`;

CREATE TABLE `bigtree_module_view_cache` (
  `view` varchar(255) NOT NULL,
  `id` varchar(255) NOT NULL,
  `gbp_field` text NOT NULL,
  `published_gbp_field` text NOT NULL,
  `group_field` text NOT NULL,
  `sort_field` varchar(255) NOT NULL,
  `group_sort_field` text NOT NULL,
  `position` int(11) NOT NULL,
  `approved` char(2) NOT NULL,
  `archived` char(2) NOT NULL,
  `featured` char(2) NOT NULL,
  `status` char(1) NOT NULL DEFAULT '',
  `pending_owner` int(11) unsigned NOT NULL,
  `column1` text NOT NULL,
  `column2` text NOT NULL,
  `column3` text NOT NULL,
  `column4` text NOT NULL,
  `column5` text NOT NULL,
  `column6` text NOT NULL,
  KEY `view` (`view`),
  KEY `group_field` (`group_field`(200)),
  KEY `group_sort_field` (`group_sort_field`(200)),
  KEY `id` (`id`),
  KEY `position` (`position`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table bigtree_open_graph
# ------------------------------------------------------------

DROP TABLE IF EXISTS `bigtree_open_graph`;

CREATE TABLE `bigtree_open_graph` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `table` varchar(255) NOT NULL DEFAULT '',
  `entry` int(11) unsigned NOT NULL,
  `type` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `bigtree_open_graph` WRITE;
/*!40000 ALTER TABLE `bigtree_open_graph` DISABLE KEYS */;

INSERT INTO `bigtree_open_graph` (`id`, `table`, `entry`, `type`, `title`, `description`, `image`)
VALUES
	(2,'bigtree_pages',1,'','','','');

/*!40000 ALTER TABLE `bigtree_open_graph` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table bigtree_page_revisions
# ------------------------------------------------------------

DROP TABLE IF EXISTS `bigtree_page_revisions`;

CREATE TABLE `bigtree_page_revisions` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `page` int(11) unsigned NOT NULL DEFAULT '0',
  `title` varchar(255) NOT NULL DEFAULT '',
  `meta_keywords` text NOT NULL,
  `meta_description` text NOT NULL,
  `template` varchar(255) NOT NULL DEFAULT '',
  `external` varchar(255) NOT NULL DEFAULT '',
  `new_window` varchar(5) NOT NULL DEFAULT '',
  `resources` longtext NOT NULL,
  `author` int(11) unsigned NOT NULL,
  `saved` char(2) NOT NULL,
  `saved_description` text NOT NULL,
  `resource_allocation` text NOT NULL,
  `has_deleted_resources` char(2) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `page` (`page`),
  KEY `saved` (`saved`),
  CONSTRAINT `bigtree_page_revisions_ibfk_1` FOREIGN KEY (`page`) REFERENCES `bigtree_pages` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `bigtree_page_revisions` WRITE;
/*!40000 ALTER TABLE `bigtree_page_revisions` DISABLE KEYS */;

INSERT INTO `bigtree_page_revisions` (`id`, `page`, `title`, `meta_keywords`, `meta_description`, `template`, `external`, `new_window`, `resources`, `author`, `saved`, `saved_description`, `resource_allocation`, `has_deleted_resources`, `updated_at`)
VALUES
	(1,1,'Search','','','search','','','{\n    \"cse_id\": \"\"\n}',1,'','','','','2018-08-02 14:37:57');

/*!40000 ALTER TABLE `bigtree_page_revisions` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table bigtree_pages
# ------------------------------------------------------------

DROP TABLE IF EXISTS `bigtree_pages`;

CREATE TABLE `bigtree_pages` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `trunk` char(2) NOT NULL,
  `parent` int(11) NOT NULL DEFAULT '0',
  `in_nav` varchar(5) NOT NULL,
  `nav_title` varchar(255) NOT NULL DEFAULT '',
  `route` varchar(255) NOT NULL,
  `path` text NOT NULL,
  `title` varchar(255) NOT NULL DEFAULT '',
  `meta_keywords` text NOT NULL,
  `meta_description` text NOT NULL,
  `open_graph` longtext,
  `seo_invisible` char(2) NOT NULL,
  `template` varchar(255) NOT NULL DEFAULT '',
  `external` varchar(255) NOT NULL DEFAULT '',
  `new_window` varchar(5) NOT NULL DEFAULT '',
  `resources` longtext NOT NULL,
  `archived` char(2) NOT NULL,
  `archived_inherited` char(2) NOT NULL,
  `publish_at` datetime DEFAULT NULL,
  `expire_at` datetime DEFAULT NULL,
  `max_age` int(11) unsigned NOT NULL,
  `last_edited_by` int(11) unsigned NOT NULL,
  `ga_page_views` int(11) unsigned NOT NULL,
  `position` int(11) NOT NULL DEFAULT '0',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `parent` (`parent`),
  KEY `in_nav` (`in_nav`),
  KEY `route` (`route`),
  KEY `path` (`path`(200)),
  KEY `publish_at` (`publish_at`),
  KEY `expire_at` (`expire_at`),
  KEY `position` (`position`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `bigtree_pages` WRITE;
/*!40000 ALTER TABLE `bigtree_pages` DISABLE KEYS */;

INSERT INTO `bigtree_pages` (`id`, `trunk`, `parent`, `in_nav`, `nav_title`, `route`, `path`, `title`, `meta_keywords`, `meta_description`, `open_graph`, `seo_invisible`, `template`, `external`, `new_window`, `resources`, `archived`, `archived_inherited`, `publish_at`, `expire_at`, `max_age`, `last_edited_by`, `ga_page_views`, `position`, `created_at`, `updated_at`)
VALUES
	(0,'on',-1,'on','BigTree Site','','','BigTree Site','','',NULL,'','home','','','{}','','',NULL,NULL,0,0,0,0,'2018-08-02 14:04:12','2018-08-02 14:04:12'),
	(1,'',0,'','Search','search','search','Search','','',NULL,'','search','','','{\n    \"page_header\": \"Search\"\n}','','',NULL,NULL,0,1,0,0,'2018-08-02 14:37:57','2018-08-02 14:43:25');

/*!40000 ALTER TABLE `bigtree_pages` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table bigtree_pending_changes
# ------------------------------------------------------------

DROP TABLE IF EXISTS `bigtree_pending_changes`;

CREATE TABLE `bigtree_pending_changes` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user` int(11) unsigned DEFAULT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `title` varchar(255) NOT NULL,
  `table` varchar(255) NOT NULL,
  `changes` longtext NOT NULL,
  `mtm_changes` longtext NOT NULL,
  `tags_changes` longtext NOT NULL,
  `open_graph_changes` longtext NOT NULL,
  `item_id` int(11) unsigned DEFAULT NULL,
  `type` varchar(15) NOT NULL,
  `module` varchar(10) NOT NULL,
  `pending_page_parent` int(11) unsigned NOT NULL,
  `publish_hook` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user` (`user`),
  KEY `item_id` (`item_id`),
  KEY `table` (`table`),
  KEY `pending_page_parent` (`pending_page_parent`),
  CONSTRAINT `bigtree_pending_changes_ibfk_1` FOREIGN KEY (`user`) REFERENCES `bigtree_users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table bigtree_resource_allocation
# ------------------------------------------------------------

DROP TABLE IF EXISTS `bigtree_resource_allocation`;

CREATE TABLE `bigtree_resource_allocation` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `table` varchar(255) DEFAULT NULL,
  `entry` varchar(255) DEFAULT NULL,
  `resource` int(11) unsigned DEFAULT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `resource` (`resource`),
  KEY `updated_at` (`updated_at`),
  CONSTRAINT `bigtree_resource_allocation_ibfk_1` FOREIGN KEY (`resource`) REFERENCES `bigtree_resources` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table bigtree_resource_folders
# ------------------------------------------------------------

DROP TABLE IF EXISTS `bigtree_resource_folders`;

CREATE TABLE `bigtree_resource_folders` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `parent` int(11) unsigned NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `parent` (`parent`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table bigtree_resources
# ------------------------------------------------------------

DROP TABLE IF EXISTS `bigtree_resources`;

CREATE TABLE `bigtree_resources` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `location` varchar(255) DEFAULT NULL,
  `folder` int(11) unsigned DEFAULT NULL,
  `file` varchar(255) NOT NULL,
  `md5` varchar(255) DEFAULT NULL,
  `date` datetime NOT NULL,
  `name` varchar(255) NOT NULL DEFAULT '',
  `type` varchar(255) NOT NULL DEFAULT '',
  `mimetype` varchar(255) DEFAULT NULL,
  `metadata` longtext NOT NULL,
  `is_image` char(2) NOT NULL DEFAULT '',
  `is_video` char(2) NOT NULL DEFAULT '',
  `height` int(11) unsigned DEFAULT NULL,
  `width` int(11) unsigned DEFAULT NULL,
  `size` int(11) unsigned DEFAULT NULL,
  `crops` text NOT NULL,
  `thumbs` text NOT NULL,
  `video_data` longtext,
  PRIMARY KEY (`id`),
  KEY `folder` (`folder`),
  CONSTRAINT `bigtree_resources_ibfk_1` FOREIGN KEY (`folder`) REFERENCES `bigtree_resource_folders` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table bigtree_route_history
# ------------------------------------------------------------

DROP TABLE IF EXISTS `bigtree_route_history`;

CREATE TABLE `bigtree_route_history` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `old_route` varchar(255) NOT NULL,
  `new_route` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `old_route` (`old_route`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table bigtree_sessions
# ------------------------------------------------------------

DROP TABLE IF EXISTS `bigtree_sessions`;

CREATE TABLE `bigtree_sessions` (
  `id` varchar(32) NOT NULL,
  `last_accessed` int(10) unsigned DEFAULT NULL,
  `ip_address` varchar(255) NOT NULL,
  `user_agent` text NOT NULL,
  `data` longtext,
  `is_login` char(2) NOT NULL DEFAULT '',
  `logged_in_user` int(11) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_logged_in_user` (`logged_in_user`),
  CONSTRAINT `fk_logged_in_user` FOREIGN KEY (`logged_in_user`) REFERENCES `bigtree_users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `bigtree_sessions` WRITE;
/*!40000 ALTER TABLE `bigtree_sessions` DISABLE KEYS */;

INSERT INTO `bigtree_sessions` (`id`, `last_accessed`, `ip_address`, `user_agent`, `data`, `is_login`, `logged_in_user`)
VALUES
	('1qac0unk0cs2ebm29mhdv3d1rp',1533311803,'','','','',NULL),
	('55fipc4ub95lfcotr40fgisv5u',1533238092,'','','','',NULL),
	('6ti8q8e1dim2f6r7fhd8fuc48a',1544478491,'::1','Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:63.0) Gecko/20100101 Firefox/63.0','bigtree_admin|a:6:{s:2:\"id\";s:1:\"1\";s:5:\"email\";s:22:\"deathstar@fastspot.com\";s:4:\"name\";s:9:\"Developer\";s:5:\"level\";s:1:\"2\";s:10:\"csrf_token\";s:44:\"Ff1Ls8f5tHx9WVXX1UClU+OoOZbIScL9Gu2p/W0dokM=\";s:16:\"csrf_token_field\";s:47:\"__csrf_token_RQB8LX0Q0R13CNEMRMFE5HVVML8WCM5K__\";}','',NULL),
	('8a5bahp5jklnipjk6f573ua7le',1533243010,'','','bigtree_login_redirect|s:37:\"http://bigtree.com/boilerplate/admin/\";bigtree_admin|a:7:{s:2:\"id\";s:1:\"1\";s:5:\"email\";s:22:\"deathstar@fastspot.com\";s:5:\"level\";s:1:\"2\";s:4:\"name\";s:9:\"Developer\";s:11:\"permissions\";N;s:10:\"csrf_token\";s:44:\"7I4JKdBEWuBPi22hUMXeYunCFYbet38ADd8TKdZH5Jc=\";s:16:\"csrf_token_field\";s:47:\"__csrf_token_C4668JFYCNPD2F7HNK53YYBAPALVCB8V__\";}','on',1),
	('gs00pmjlv45ugns0m81dptgkar',1533311803,'','','','',NULL),
	('rgoivci472uhiskppl30vgbrgt',1533311803,'','','bigtree_login_redirect|s:63:\"http://bigtree.com/boilerplate/admin/developer/callouts/groups/\";','',NULL),
	('t2ehc94i983vmh6hmhbtp7trbh',1533311803,'','','bigtree_login_redirect|s:63:\"http://bigtree.com/boilerplate/admin/developer/callouts/groups/\";','',NULL),
	('tdnbije4h2mid05nql15i3doj4',1533328427,'','','bigtree_login_redirect|s:37:\"http://bigtree.com/boilerplate/admin/\";bigtree_admin|a:8:{s:2:\"id\";s:1:\"1\";s:5:\"email\";s:22:\"deathstar@fastspot.com\";s:5:\"level\";s:1:\"2\";s:4:\"name\";s:9:\"Developer\";s:11:\"permissions\";N;s:10:\"csrf_token\";s:44:\"yjKxCkBTaAss4USM/tJSb5oxv/7T0LDV6DSbJyJyimg=\";s:16:\"csrf_token_field\";s:47:\"__csrf_token_0E4N8QMP74VTP4M5MJ99MWJQ23NXCV9C__\";s:9:\"form_data\";a:4:{s:4:\"page\";s:1:\"1\";s:11:\"return_link\";s:55:\"http://bigtree.com/boilerplate/admin/pages/view-tree/0/\";s:9:\"edit_link\";s:50:\"http://bigtree.com/boilerplate/admin/pages/edit/1/\";s:6:\"errors\";a:0:{}}}','on',1);

/*!40000 ALTER TABLE `bigtree_sessions` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table bigtree_settings
# ------------------------------------------------------------

DROP TABLE IF EXISTS `bigtree_settings`;

CREATE TABLE `bigtree_settings` (
  `id` varchar(255) NOT NULL DEFAULT '',
  `value` longblob NOT NULL,
  `encrypted` char(2) NOT NULL,
  `extension` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `extension` (`extension`),
  CONSTRAINT `bigtree_settings_ibfk_1` FOREIGN KEY (`extension`) REFERENCES `bigtree_extensions` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `bigtree_settings` WRITE;
/*!40000 ALTER TABLE `bigtree_settings` DISABLE KEYS */;

INSERT INTO `bigtree_settings` (`id`, `value`, `encrypted`, `extension`)
VALUES
	('404-page-content',X'6E756C6C','',NULL),
	('404-page-header',X'6E756C6C','',NULL),
	('bigtree-file-manager-thumbnail-sizes',X'5B0A202020207B0A2020202020202020227469746C65223A2022536D616C6C222C0A202020202020202022707265666978223A2022736D616C6C5F222C0A2020202020202020227769647468223A2022313530222C0A202020202020202022686569676874223A2022313030222C0A2020202020202020225F5F696E7465726E616C2D7469746C65223A2022536D616C6C220A202020207D2C0A202020207B0A2020202020202020227469746C65223A20224D656469756D222C0A202020202020202022707265666978223A20226D656469756D5F222C0A2020202020202020227769647468223A2022333030222C0A202020202020202022686569676874223A2022323030222C0A2020202020202020225F5F696E7465726E616C2D7469746C65223A20224D656469756D220A202020207D2C0A202020207B0A2020202020202020227469746C65223A20224C61726765222C0A202020202020202022707265666978223A20226C617267655F222C0A2020202020202020227769647468223A2022383030222C0A202020202020202022686569676874223A2022363030222C0A2020202020202020225F5F696E7465726E616C2D7469746C65223A20224C61726765220A202020207D0A5D','',NULL),
	('bigtree-file-metadata-fields',X'7B7D','',NULL),
	('bigtree-internal-cron-last-run',X'223135343434373831363922','',NULL),
	('bigtree-internal-deleted-users',X'7B7D','',NULL),
	('bigtree-internal-disable-page-tagging','','',NULL),
	('bigtree-internal-google-analytics-api',X'F46701D22F29A35FAB4AC85F29B0504A40BB2037B9F02EC27C49EBB6907969B34DEBAF6011B4964888CCB71C93DB506CEE90B332DB42141C7F8093AF160ADF8F70E264512BB2248361A6B4AA7E90D3E3A8CE02CB1710AAA23203261A86DCAB545B4C6399CC7EA47BEB870AF49BA170EA2CD4774366D69C78B951CE1B79D79CE064D963067A0F65EF6C89B0A825883E83EFB37555EF81DC196F838B99246C54AB','on',NULL),
	('bigtree-internal-media-settings',X'7B0A20202020226E616D65223A202246696C65204D616E6167657220507265736574222C0A20202020226D696E5F7769647468223A202231343430222C0A20202020226D696E5F686569676874223A202231303830222C0A2020202022707265766965775F707265666978223A2022636C61737369632D7878736D6C2D222C0A202020202263726F7073223A205B0A20202020202020207B0A20202020202020202020202022707265666978223A2022756C747261776964652D786C72672D222C0A202020202020202020202020227769647468223A202231343430222C0A20202020202020202020202022686569676874223A2022363137222C0A20202020202020202020202022677261797363616C65223A2022222C0A202020202020202020202020227468756D6273223A207B0A202020202020202020202020202020202231223A207B0A202020202020202020202020202020202020202022707265666978223A2022756C747261776964652D7878736D6C2D222C0A2020202020202020202020202020202020202020227769647468223A2022333030222C0A202020202020202020202020202020202020202022686569676874223A2022222C0A202020202020202020202020202020202020202022677261797363616C65223A2022220A202020202020202020202020202020207D2C0A202020202020202020202020202020202232223A207B0A202020202020202020202020202020202020202022707265666978223A2022756C747261776964652D78736D6C2D222C0A2020202020202020202020202020202020202020227769647468223A2022353030222C0A202020202020202020202020202020202020202022686569676874223A2022222C0A202020202020202020202020202020202020202022677261797363616C65223A2022220A202020202020202020202020202020207D2C0A202020202020202020202020202020202233223A207B0A202020202020202020202020202020202020202022707265666978223A2022756C747261776964652D736D6C2D222C0A2020202020202020202020202020202020202020227769647468223A2022373430222C0A202020202020202020202020202020202020202022686569676874223A2022222C0A202020202020202020202020202020202020202022677261797363616C65223A2022220A202020202020202020202020202020207D2C0A202020202020202020202020202020202234223A207B0A202020202020202020202020202020202020202022707265666978223A2022756C747261776964652D6D65642D222C0A2020202020202020202020202020202020202020227769647468223A2022393830222C0A202020202020202020202020202020202020202022686569676874223A2022222C0A202020202020202020202020202020202020202022677261797363616C65223A2022220A202020202020202020202020202020207D2C0A202020202020202020202020202020202235223A207B0A202020202020202020202020202020202020202022707265666978223A2022756C747261776964652D6C72672D222C0A2020202020202020202020202020202020202020227769647468223A202231323230222C0A202020202020202020202020202020202020202022686569676874223A2022222C0A202020202020202020202020202020202020202022677261797363616C65223A2022220A202020202020202020202020202020207D0A2020202020202020202020207D0A20202020202020207D2C0A20202020202020207B0A20202020202020202020202022707265666978223A2022776964652D786C72672D222C0A202020202020202020202020227769647468223A202231343430222C0A20202020202020202020202022686569676874223A2022383130222C0A20202020202020202020202022677261797363616C65223A2022222C0A202020202020202020202020227468756D6273223A207B0A202020202020202020202020202020202236223A207B0A202020202020202020202020202020202020202022707265666978223A2022776964652D7878736D6C2D222C0A2020202020202020202020202020202020202020227769647468223A2022333030222C0A202020202020202020202020202020202020202022686569676874223A2022222C0A202020202020202020202020202020202020202022677261797363616C65223A2022220A202020202020202020202020202020207D2C0A202020202020202020202020202020202237223A207B0A202020202020202020202020202020202020202022707265666978223A2022776964652D78736D6C2D222C0A2020202020202020202020202020202020202020227769647468223A2022353030222C0A202020202020202020202020202020202020202022686569676874223A2022222C0A202020202020202020202020202020202020202022677261797363616C65223A2022220A202020202020202020202020202020207D2C0A202020202020202020202020202020202238223A207B0A202020202020202020202020202020202020202022707265666978223A2022776964652D736D6C2D222C0A2020202020202020202020202020202020202020227769647468223A2022373430222C0A202020202020202020202020202020202020202022686569676874223A2022222C0A202020202020202020202020202020202020202022677261797363616C65223A2022220A202020202020202020202020202020207D2C0A202020202020202020202020202020202239223A207B0A202020202020202020202020202020202020202022707265666978223A2022776964652D6D65642D222C0A2020202020202020202020202020202020202020227769647468223A2022393830222C0A202020202020202020202020202020202020202022686569676874223A2022222C0A202020202020202020202020202020202020202022677261797363616C65223A2022220A202020202020202020202020202020207D2C0A20202020202020202020202020202020223130223A207B0A202020202020202020202020202020202020202022707265666978223A2022776964652D6C72672D222C0A2020202020202020202020202020202020202020227769647468223A202231323230222C0A202020202020202020202020202020202020202022686569676874223A2022222C0A202020202020202020202020202020202020202022677261797363616C65223A2022220A202020202020202020202020202020207D0A2020202020202020202020207D0A20202020202020207D2C0A20202020202020207B0A20202020202020202020202022707265666978223A202266756C6C2D786C72672D222C0A202020202020202020202020227769647468223A202231343430222C0A20202020202020202020202022686569676874223A202231303830222C0A20202020202020202020202022677261797363616C65223A2022222C0A202020202020202020202020227468756D6273223A207B0A20202020202020202020202020202020223131223A207B0A202020202020202020202020202020202020202022707265666978223A202266756C6C2D7878736D6C2D222C0A2020202020202020202020202020202020202020227769647468223A2022333030222C0A202020202020202020202020202020202020202022686569676874223A2022222C0A202020202020202020202020202020202020202022677261797363616C65223A2022220A202020202020202020202020202020207D2C0A20202020202020202020202020202020223132223A207B0A202020202020202020202020202020202020202022707265666978223A202266756C6C2D78736D6C2D222C0A2020202020202020202020202020202020202020227769647468223A2022353030222C0A202020202020202020202020202020202020202022686569676874223A2022222C0A202020202020202020202020202020202020202022677261797363616C65223A2022220A202020202020202020202020202020207D2C0A20202020202020202020202020202020223133223A207B0A202020202020202020202020202020202020202022707265666978223A202266756C6C2D736D6C2D222C0A2020202020202020202020202020202020202020227769647468223A2022373430222C0A202020202020202020202020202020202020202022686569676874223A2022222C0A202020202020202020202020202020202020202022677261797363616C65223A2022220A202020202020202020202020202020207D2C0A20202020202020202020202020202020223134223A207B0A202020202020202020202020202020202020202022707265666978223A202266756C6C2D6D65642D222C0A2020202020202020202020202020202020202020227769647468223A2022393830222C0A202020202020202020202020202020202020202022686569676874223A2022222C0A202020202020202020202020202020202020202022677261797363616C65223A2022220A202020202020202020202020202020207D2C0A20202020202020202020202020202020223135223A207B0A202020202020202020202020202020202020202022707265666978223A202266756C6C2D6C72672D222C0A2020202020202020202020202020202020202020227769647468223A202231323230222C0A202020202020202020202020202020202020202022686569676874223A2022222C0A202020202020202020202020202020202020202022677261797363616C65223A2022220A202020202020202020202020202020207D0A2020202020202020202020207D0A20202020202020207D2C0A20202020202020207B0A20202020202020202020202022707265666978223A20227371756172652D6D65642D222C0A202020202020202020202020227769647468223A2022393830222C0A20202020202020202020202022686569676874223A2022393830222C0A20202020202020202020202022677261797363616C65223A2022222C0A202020202020202020202020227468756D6273223A207B0A20202020202020202020202020202020223136223A207B0A202020202020202020202020202020202020202022707265666978223A20227371756172652D7878736D6C2D222C0A2020202020202020202020202020202020202020227769647468223A2022333030222C0A202020202020202020202020202020202020202022686569676874223A2022222C0A202020202020202020202020202020202020202022677261797363616C65223A2022220A202020202020202020202020202020207D2C0A20202020202020202020202020202020223137223A207B0A202020202020202020202020202020202020202022707265666978223A20227371756172652D78736D6C2D222C0A2020202020202020202020202020202020202020227769647468223A2022353030222C0A202020202020202020202020202020202020202022686569676874223A2022222C0A202020202020202020202020202020202020202022677261797363616C65223A2022220A202020202020202020202020202020207D2C0A20202020202020202020202020202020223138223A207B0A202020202020202020202020202020202020202022707265666978223A20227371756172652D736D6C2D222C0A2020202020202020202020202020202020202020227769647468223A2022373430222C0A202020202020202020202020202020202020202022686569676874223A2022222C0A202020202020202020202020202020202020202022677261797363616C65223A2022220A202020202020202020202020202020207D0A2020202020202020202020207D0A20202020202020207D2C0A20202020202020207B0A20202020202020202020202022707265666978223A2022636C61737369632D786C72672D222C0A202020202020202020202020227769647468223A202231343430222C0A20202020202020202020202022686569676874223A2022393630222C0A20202020202020202020202022677261797363616C65223A2022222C0A202020202020202020202020227468756D6273223A207B0A20202020202020202020202020202020223139223A207B0A202020202020202020202020202020202020202022707265666978223A2022636C61737369632D7878736D6C2D222C0A2020202020202020202020202020202020202020227769647468223A2022333030222C0A202020202020202020202020202020202020202022686569676874223A2022222C0A202020202020202020202020202020202020202022677261797363616C65223A2022220A202020202020202020202020202020207D2C0A20202020202020202020202020202020223230223A207B0A202020202020202020202020202020202020202022707265666978223A2022636C61737369632D78736D6C2D222C0A2020202020202020202020202020202020202020227769647468223A2022353030222C0A202020202020202020202020202020202020202022686569676874223A2022222C0A202020202020202020202020202020202020202022677261797363616C65223A2022220A202020202020202020202020202020207D2C0A20202020202020202020202020202020223231223A207B0A202020202020202020202020202020202020202022707265666978223A2022636C61737369632D736D6C2D222C0A2020202020202020202020202020202020202020227769647468223A2022373430222C0A202020202020202020202020202020202020202022686569676874223A2022222C0A202020202020202020202020202020202020202022677261797363616C65223A2022220A202020202020202020202020202020207D2C0A20202020202020202020202020202020223232223A207B0A202020202020202020202020202020202020202022707265666978223A2022636C61737369632D6D65642D222C0A2020202020202020202020202020202020202020227769647468223A2022393830222C0A202020202020202020202020202020202020202022686569676874223A2022222C0A202020202020202020202020202020202020202022677261797363616C65223A2022220A202020202020202020202020202020207D2C0A20202020202020202020202020202020223233223A207B0A202020202020202020202020202020202020202022707265666978223A2022636C61737369632D6C72672D222C0A2020202020202020202020202020202020202020227769647468223A202231323230222C0A202020202020202020202020202020202020202022686569676874223A2022222C0A202020202020202020202020202020202020202022677261797363616C65223A2022220A202020202020202020202020202020207D0A2020202020202020202020207D0A20202020202020207D2C0A20202020202020207B0A20202020202020202020202022707265666978223A2022706F7274726169742D66756C6C2D6D65642D222C0A202020202020202020202020227769647468223A2022373335222C0A20202020202020202020202022686569676874223A2022393830222C0A20202020202020202020202022677261797363616C65223A2022222C0A202020202020202020202020227468756D6273223A207B0A20202020202020202020202020202020223234223A207B0A202020202020202020202020202020202020202022707265666978223A2022706F7274726169742D66756C6C2D7878736D6C2D222C0A2020202020202020202020202020202020202020227769647468223A2022222C0A202020202020202020202020202020202020202022686569676874223A2022333030222C0A202020202020202020202020202020202020202022677261797363616C65223A2022220A202020202020202020202020202020207D2C0A20202020202020202020202020202020223235223A207B0A202020202020202020202020202020202020202022707265666978223A2022706F7274726169742D66756C6C2D78736D6C2D222C0A2020202020202020202020202020202020202020227769647468223A2022222C0A202020202020202020202020202020202020202022686569676874223A2022353030222C0A202020202020202020202020202020202020202022677261797363616C65223A2022220A202020202020202020202020202020207D2C0A20202020202020202020202020202020223236223A207B0A202020202020202020202020202020202020202022707265666978223A2022706F7274726169742D66756C6C2D736D6C2D222C0A2020202020202020202020202020202020202020227769647468223A2022222C0A202020202020202020202020202020202020202022686569676874223A2022373430222C0A202020202020202020202020202020202020202022677261797363616C65223A2022220A202020202020202020202020202020207D0A2020202020202020202020207D0A20202020202020207D2C0A20202020202020207B0A20202020202020202020202022707265666978223A2022706F7274726169742D636C61737369632D6D65642D222C0A202020202020202020202020227769647468223A2022363534222C0A20202020202020202020202022686569676874223A2022393830222C0A20202020202020202020202022677261797363616C65223A2022222C0A202020202020202020202020227468756D6273223A207B0A20202020202020202020202020202020223237223A207B0A202020202020202020202020202020202020202022707265666978223A2022706F7274726169742D636C61737369632D7878736D6C2D222C0A2020202020202020202020202020202020202020227769647468223A2022222C0A202020202020202020202020202020202020202022686569676874223A2022333030222C0A202020202020202020202020202020202020202022677261797363616C65223A2022220A202020202020202020202020202020207D2C0A20202020202020202020202020202020223238223A207B0A202020202020202020202020202020202020202022707265666978223A2022706F7274726169742D636C61737369632D78736D6C2D222C0A2020202020202020202020202020202020202020227769647468223A2022222C0A202020202020202020202020202020202020202022686569676874223A2022353030222C0A202020202020202020202020202020202020202022677261797363616C65223A2022220A202020202020202020202020202020207D2C0A20202020202020202020202020202020223239223A207B0A202020202020202020202020202020202020202022707265666978223A2022706F7274726169742D636C61737369632D736D6C2D222C0A2020202020202020202020202020202020202020227769647468223A2022222C0A202020202020202020202020202020202020202022686569676874223A2022373430222C0A202020202020202020202020202020202020202022677261797363616C65223A2022220A202020202020202020202020202020207D0A2020202020202020202020207D0A20202020202020207D0A202020205D2C0A20202020227468756D6273223A205B0A20202020202020207B0A20202020202020202020202022707265666978223A2022222C0A202020202020202020202020227769647468223A202233303030222C0A20202020202020202020202022686569676874223A202233303030222C0A20202020202020202020202022677261797363616C65223A2022220A20202020202020207D0A202020205D2C0A20202020226964223A202264656661756C74222C0A202020202270726573657473223A207B0A20202020202020202264656661756C74223A207B0A202020202020202020202020226E616D65223A202246696C65204D616E6167657220507265736574222C0A202020202020202020202020226D696E5F7769647468223A202231343430222C0A202020202020202020202020226D696E5F686569676874223A202231303830222C0A20202020202020202020202022707265766965775F707265666978223A2022636C61737369632D7878736D6C2D222C0A2020202020202020202020202263726F7073223A205B0A202020202020202020202020202020207B0A202020202020202020202020202020202020202022707265666978223A2022756C747261776964652D786C72672D222C0A2020202020202020202020202020202020202020227769647468223A202231343430222C0A202020202020202020202020202020202020202022686569676874223A2022363137222C0A202020202020202020202020202020202020202022677261797363616C65223A2022222C0A2020202020202020202020202020202020202020227468756D6273223A207B0A2020202020202020202020202020202020202020202020202231223A207B0A2020202020202020202020202020202020202020202020202020202022707265666978223A2022756C747261776964652D7878736D6C2D222C0A20202020202020202020202020202020202020202020202020202020227769647468223A2022333030222C0A2020202020202020202020202020202020202020202020202020202022686569676874223A2022222C0A2020202020202020202020202020202020202020202020202020202022677261797363616C65223A2022220A2020202020202020202020202020202020202020202020207D2C0A2020202020202020202020202020202020202020202020202232223A207B0A2020202020202020202020202020202020202020202020202020202022707265666978223A2022756C747261776964652D78736D6C2D222C0A20202020202020202020202020202020202020202020202020202020227769647468223A2022353030222C0A2020202020202020202020202020202020202020202020202020202022686569676874223A2022222C0A2020202020202020202020202020202020202020202020202020202022677261797363616C65223A2022220A2020202020202020202020202020202020202020202020207D2C0A2020202020202020202020202020202020202020202020202233223A207B0A2020202020202020202020202020202020202020202020202020202022707265666978223A2022756C747261776964652D736D6C2D222C0A20202020202020202020202020202020202020202020202020202020227769647468223A2022373430222C0A2020202020202020202020202020202020202020202020202020202022686569676874223A2022222C0A2020202020202020202020202020202020202020202020202020202022677261797363616C65223A2022220A2020202020202020202020202020202020202020202020207D2C0A2020202020202020202020202020202020202020202020202234223A207B0A2020202020202020202020202020202020202020202020202020202022707265666978223A2022756C747261776964652D6D65642D222C0A20202020202020202020202020202020202020202020202020202020227769647468223A2022393830222C0A2020202020202020202020202020202020202020202020202020202022686569676874223A2022222C0A2020202020202020202020202020202020202020202020202020202022677261797363616C65223A2022220A2020202020202020202020202020202020202020202020207D2C0A2020202020202020202020202020202020202020202020202235223A207B0A2020202020202020202020202020202020202020202020202020202022707265666978223A2022756C747261776964652D6C72672D222C0A20202020202020202020202020202020202020202020202020202020227769647468223A202231323230222C0A2020202020202020202020202020202020202020202020202020202022686569676874223A2022222C0A2020202020202020202020202020202020202020202020202020202022677261797363616C65223A2022220A2020202020202020202020202020202020202020202020207D0A20202020202020202020202020202020202020207D0A202020202020202020202020202020207D2C0A202020202020202020202020202020207B0A202020202020202020202020202020202020202022707265666978223A2022776964652D786C72672D222C0A2020202020202020202020202020202020202020227769647468223A202231343430222C0A202020202020202020202020202020202020202022686569676874223A2022383130222C0A202020202020202020202020202020202020202022677261797363616C65223A2022222C0A2020202020202020202020202020202020202020227468756D6273223A207B0A2020202020202020202020202020202020202020202020202236223A207B0A2020202020202020202020202020202020202020202020202020202022707265666978223A2022776964652D7878736D6C2D222C0A20202020202020202020202020202020202020202020202020202020227769647468223A2022333030222C0A2020202020202020202020202020202020202020202020202020202022686569676874223A2022222C0A2020202020202020202020202020202020202020202020202020202022677261797363616C65223A2022220A2020202020202020202020202020202020202020202020207D2C0A2020202020202020202020202020202020202020202020202237223A207B0A2020202020202020202020202020202020202020202020202020202022707265666978223A2022776964652D78736D6C2D222C0A20202020202020202020202020202020202020202020202020202020227769647468223A2022353030222C0A2020202020202020202020202020202020202020202020202020202022686569676874223A2022222C0A2020202020202020202020202020202020202020202020202020202022677261797363616C65223A2022220A2020202020202020202020202020202020202020202020207D2C0A2020202020202020202020202020202020202020202020202238223A207B0A2020202020202020202020202020202020202020202020202020202022707265666978223A2022776964652D736D6C2D222C0A20202020202020202020202020202020202020202020202020202020227769647468223A2022373430222C0A2020202020202020202020202020202020202020202020202020202022686569676874223A2022222C0A2020202020202020202020202020202020202020202020202020202022677261797363616C65223A2022220A2020202020202020202020202020202020202020202020207D2C0A2020202020202020202020202020202020202020202020202239223A207B0A2020202020202020202020202020202020202020202020202020202022707265666978223A2022776964652D6D65642D222C0A20202020202020202020202020202020202020202020202020202020227769647468223A2022393830222C0A2020202020202020202020202020202020202020202020202020202022686569676874223A2022222C0A2020202020202020202020202020202020202020202020202020202022677261797363616C65223A2022220A2020202020202020202020202020202020202020202020207D2C0A202020202020202020202020202020202020202020202020223130223A207B0A2020202020202020202020202020202020202020202020202020202022707265666978223A2022776964652D6C72672D222C0A20202020202020202020202020202020202020202020202020202020227769647468223A202231323230222C0A2020202020202020202020202020202020202020202020202020202022686569676874223A2022222C0A2020202020202020202020202020202020202020202020202020202022677261797363616C65223A2022220A2020202020202020202020202020202020202020202020207D0A20202020202020202020202020202020202020207D0A202020202020202020202020202020207D2C0A202020202020202020202020202020207B0A202020202020202020202020202020202020202022707265666978223A202266756C6C2D786C72672D222C0A2020202020202020202020202020202020202020227769647468223A202231343430222C0A202020202020202020202020202020202020202022686569676874223A202231303830222C0A202020202020202020202020202020202020202022677261797363616C65223A2022222C0A2020202020202020202020202020202020202020227468756D6273223A207B0A202020202020202020202020202020202020202020202020223131223A207B0A2020202020202020202020202020202020202020202020202020202022707265666978223A202266756C6C2D7878736D6C2D222C0A20202020202020202020202020202020202020202020202020202020227769647468223A2022333030222C0A2020202020202020202020202020202020202020202020202020202022686569676874223A2022222C0A2020202020202020202020202020202020202020202020202020202022677261797363616C65223A2022220A2020202020202020202020202020202020202020202020207D2C0A202020202020202020202020202020202020202020202020223132223A207B0A2020202020202020202020202020202020202020202020202020202022707265666978223A202266756C6C2D78736D6C2D222C0A20202020202020202020202020202020202020202020202020202020227769647468223A2022353030222C0A2020202020202020202020202020202020202020202020202020202022686569676874223A2022222C0A2020202020202020202020202020202020202020202020202020202022677261797363616C65223A2022220A2020202020202020202020202020202020202020202020207D2C0A202020202020202020202020202020202020202020202020223133223A207B0A2020202020202020202020202020202020202020202020202020202022707265666978223A202266756C6C2D736D6C2D222C0A20202020202020202020202020202020202020202020202020202020227769647468223A2022373430222C0A2020202020202020202020202020202020202020202020202020202022686569676874223A2022222C0A2020202020202020202020202020202020202020202020202020202022677261797363616C65223A2022220A2020202020202020202020202020202020202020202020207D2C0A202020202020202020202020202020202020202020202020223134223A207B0A2020202020202020202020202020202020202020202020202020202022707265666978223A202266756C6C2D6D65642D222C0A20202020202020202020202020202020202020202020202020202020227769647468223A2022393830222C0A2020202020202020202020202020202020202020202020202020202022686569676874223A2022222C0A2020202020202020202020202020202020202020202020202020202022677261797363616C65223A2022220A2020202020202020202020202020202020202020202020207D2C0A202020202020202020202020202020202020202020202020223135223A207B0A2020202020202020202020202020202020202020202020202020202022707265666978223A202266756C6C2D6C72672D222C0A20202020202020202020202020202020202020202020202020202020227769647468223A202231323230222C0A2020202020202020202020202020202020202020202020202020202022686569676874223A2022222C0A2020202020202020202020202020202020202020202020202020202022677261797363616C65223A2022220A2020202020202020202020202020202020202020202020207D0A20202020202020202020202020202020202020207D0A202020202020202020202020202020207D2C0A202020202020202020202020202020207B0A202020202020202020202020202020202020202022707265666978223A20227371756172652D6D65642D222C0A2020202020202020202020202020202020202020227769647468223A2022393830222C0A202020202020202020202020202020202020202022686569676874223A2022393830222C0A202020202020202020202020202020202020202022677261797363616C65223A2022222C0A2020202020202020202020202020202020202020227468756D6273223A207B0A202020202020202020202020202020202020202020202020223136223A207B0A2020202020202020202020202020202020202020202020202020202022707265666978223A20227371756172652D7878736D6C2D222C0A20202020202020202020202020202020202020202020202020202020227769647468223A2022333030222C0A2020202020202020202020202020202020202020202020202020202022686569676874223A2022222C0A2020202020202020202020202020202020202020202020202020202022677261797363616C65223A2022220A2020202020202020202020202020202020202020202020207D2C0A202020202020202020202020202020202020202020202020223137223A207B0A2020202020202020202020202020202020202020202020202020202022707265666978223A20227371756172652D78736D6C2D222C0A20202020202020202020202020202020202020202020202020202020227769647468223A2022353030222C0A2020202020202020202020202020202020202020202020202020202022686569676874223A2022222C0A2020202020202020202020202020202020202020202020202020202022677261797363616C65223A2022220A2020202020202020202020202020202020202020202020207D2C0A202020202020202020202020202020202020202020202020223138223A207B0A2020202020202020202020202020202020202020202020202020202022707265666978223A20227371756172652D736D6C2D222C0A20202020202020202020202020202020202020202020202020202020227769647468223A2022373430222C0A2020202020202020202020202020202020202020202020202020202022686569676874223A2022222C0A2020202020202020202020202020202020202020202020202020202022677261797363616C65223A2022220A2020202020202020202020202020202020202020202020207D0A20202020202020202020202020202020202020207D0A202020202020202020202020202020207D2C0A202020202020202020202020202020207B0A202020202020202020202020202020202020202022707265666978223A2022636C61737369632D786C72672D222C0A2020202020202020202020202020202020202020227769647468223A202231343430222C0A202020202020202020202020202020202020202022686569676874223A2022393630222C0A202020202020202020202020202020202020202022677261797363616C65223A2022222C0A2020202020202020202020202020202020202020227468756D6273223A207B0A202020202020202020202020202020202020202020202020223139223A207B0A2020202020202020202020202020202020202020202020202020202022707265666978223A2022636C61737369632D7878736D6C2D222C0A20202020202020202020202020202020202020202020202020202020227769647468223A2022333030222C0A2020202020202020202020202020202020202020202020202020202022686569676874223A2022222C0A2020202020202020202020202020202020202020202020202020202022677261797363616C65223A2022220A2020202020202020202020202020202020202020202020207D2C0A202020202020202020202020202020202020202020202020223230223A207B0A2020202020202020202020202020202020202020202020202020202022707265666978223A2022636C61737369632D78736D6C2D222C0A20202020202020202020202020202020202020202020202020202020227769647468223A2022353030222C0A2020202020202020202020202020202020202020202020202020202022686569676874223A2022222C0A2020202020202020202020202020202020202020202020202020202022677261797363616C65223A2022220A2020202020202020202020202020202020202020202020207D2C0A202020202020202020202020202020202020202020202020223231223A207B0A2020202020202020202020202020202020202020202020202020202022707265666978223A2022636C61737369632D736D6C2D222C0A20202020202020202020202020202020202020202020202020202020227769647468223A2022373430222C0A2020202020202020202020202020202020202020202020202020202022686569676874223A2022222C0A2020202020202020202020202020202020202020202020202020202022677261797363616C65223A2022220A2020202020202020202020202020202020202020202020207D2C0A202020202020202020202020202020202020202020202020223232223A207B0A2020202020202020202020202020202020202020202020202020202022707265666978223A2022636C61737369632D6D65642D222C0A20202020202020202020202020202020202020202020202020202020227769647468223A2022393830222C0A2020202020202020202020202020202020202020202020202020202022686569676874223A2022222C0A2020202020202020202020202020202020202020202020202020202022677261797363616C65223A2022220A2020202020202020202020202020202020202020202020207D2C0A202020202020202020202020202020202020202020202020223233223A207B0A2020202020202020202020202020202020202020202020202020202022707265666978223A2022636C61737369632D6C72672D222C0A20202020202020202020202020202020202020202020202020202020227769647468223A202231323230222C0A2020202020202020202020202020202020202020202020202020202022686569676874223A2022222C0A2020202020202020202020202020202020202020202020202020202022677261797363616C65223A2022220A2020202020202020202020202020202020202020202020207D0A20202020202020202020202020202020202020207D0A202020202020202020202020202020207D2C0A202020202020202020202020202020207B0A202020202020202020202020202020202020202022707265666978223A2022706F7274726169742D66756C6C2D6D65642D222C0A2020202020202020202020202020202020202020227769647468223A2022373335222C0A202020202020202020202020202020202020202022686569676874223A2022393830222C0A202020202020202020202020202020202020202022677261797363616C65223A2022222C0A2020202020202020202020202020202020202020227468756D6273223A207B0A202020202020202020202020202020202020202020202020223234223A207B0A2020202020202020202020202020202020202020202020202020202022707265666978223A2022706F7274726169742D66756C6C2D7878736D6C2D222C0A20202020202020202020202020202020202020202020202020202020227769647468223A2022222C0A2020202020202020202020202020202020202020202020202020202022686569676874223A2022333030222C0A2020202020202020202020202020202020202020202020202020202022677261797363616C65223A2022220A2020202020202020202020202020202020202020202020207D2C0A202020202020202020202020202020202020202020202020223235223A207B0A2020202020202020202020202020202020202020202020202020202022707265666978223A2022706F7274726169742D66756C6C2D78736D6C2D222C0A20202020202020202020202020202020202020202020202020202020227769647468223A2022222C0A2020202020202020202020202020202020202020202020202020202022686569676874223A2022353030222C0A2020202020202020202020202020202020202020202020202020202022677261797363616C65223A2022220A2020202020202020202020202020202020202020202020207D2C0A202020202020202020202020202020202020202020202020223236223A207B0A2020202020202020202020202020202020202020202020202020202022707265666978223A2022706F7274726169742D66756C6C2D736D6C2D222C0A20202020202020202020202020202020202020202020202020202020227769647468223A2022222C0A2020202020202020202020202020202020202020202020202020202022686569676874223A2022373430222C0A2020202020202020202020202020202020202020202020202020202022677261797363616C65223A2022220A2020202020202020202020202020202020202020202020207D0A20202020202020202020202020202020202020207D0A202020202020202020202020202020207D2C0A202020202020202020202020202020207B0A202020202020202020202020202020202020202022707265666978223A2022706F7274726169742D636C61737369632D6D65642D222C0A2020202020202020202020202020202020202020227769647468223A2022363534222C0A202020202020202020202020202020202020202022686569676874223A2022393830222C0A202020202020202020202020202020202020202022677261797363616C65223A2022222C0A2020202020202020202020202020202020202020227468756D6273223A207B0A202020202020202020202020202020202020202020202020223237223A207B0A2020202020202020202020202020202020202020202020202020202022707265666978223A2022706F7274726169742D636C61737369632D7878736D6C2D222C0A20202020202020202020202020202020202020202020202020202020227769647468223A2022222C0A2020202020202020202020202020202020202020202020202020202022686569676874223A2022333030222C0A2020202020202020202020202020202020202020202020202020202022677261797363616C65223A2022220A2020202020202020202020202020202020202020202020207D2C0A202020202020202020202020202020202020202020202020223238223A207B0A2020202020202020202020202020202020202020202020202020202022707265666978223A2022706F7274726169742D636C61737369632D78736D6C2D222C0A20202020202020202020202020202020202020202020202020202020227769647468223A2022222C0A2020202020202020202020202020202020202020202020202020202022686569676874223A2022353030222C0A2020202020202020202020202020202020202020202020202020202022677261797363616C65223A2022220A2020202020202020202020202020202020202020202020207D2C0A202020202020202020202020202020202020202020202020223239223A207B0A2020202020202020202020202020202020202020202020202020202022707265666978223A2022706F7274726169742D636C61737369632D736D6C2D222C0A20202020202020202020202020202020202020202020202020202020227769647468223A2022222C0A2020202020202020202020202020202020202020202020202020202022686569676874223A2022373430222C0A2020202020202020202020202020202020202020202020202020202022677261797363616C65223A2022220A2020202020202020202020202020202020202020202020207D0A20202020202020202020202020202020202020207D0A202020202020202020202020202020207D0A2020202020202020202020205D2C0A202020202020202020202020227468756D6273223A205B0A202020202020202020202020202020207B0A202020202020202020202020202020202020202022707265666978223A2022222C0A2020202020202020202020202020202020202020227769647468223A202233303030222C0A202020202020202020202020202020202020202022686569676874223A202233303030222C0A202020202020202020202020202020202020202022677261797363616C65223A2022220A202020202020202020202020202020207D0A2020202020202020202020205D2C0A202020202020202020202020226964223A202264656661756C74220A20202020202020207D0A202020207D0A7D','',NULL),
	('bigtree-internal-payment-gateway',X'3EB846AB782071A8ADC61943783EAC9A706E60A556AC48353209062204569BF90A23660D50C0E6C0FA10B88E4C4A5DEE','on',NULL),
	('bigtree-internal-per-page',X'3135','',NULL),
	('bigtree-internal-revision',X'2234303322','',NULL),
	('bigtree-internal-security-policy',X'7B2270617373776F7264223A7B22696E7669746174696F6E73223A20226F6E227D7D','',NULL),
	('bigtree-internal-storage',X'7B0A202020202273657276696365223A20226C6F63616C220A7D','',NULL),
	('com.fastspot.form-builder*settings',X'7B0A20202020226163636570745F7061796D656E7473223A2022222C0A20202020226E6F5F637373223A20226F6E222C0A2020202022646F6E745F647261775F706167655F686561646572223A20226F6E222C0A202020202264697361626C655F636F6C756D6E73223A20226F6E222C0A2020202022726563617074636861223A207B0A202020202020202022736974655F6B6579223A2022222C0A2020202020202020227365637265745F6B6579223A2022220A202020207D2C0A2020202022746578745F77726170706572223A20223C64697620636C6173733D5C227479706F6772617068795C223E222C0A2020202022746578745F777261707065725F656E64223A20223C2F6469763E220A7D','','com.fastspot.form-builder'),
	('nav-footer',X'6E756C6C','',NULL),
	('nav-secondary',X'6E756C6C','',NULL),
	('nav-social',X'6E756C6C','',NULL);

/*!40000 ALTER TABLE `bigtree_settings` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table bigtree_tags
# ------------------------------------------------------------

DROP TABLE IF EXISTS `bigtree_tags`;

CREATE TABLE `bigtree_tags` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `tag` varchar(255) NOT NULL,
  `metaphone` varchar(255) NOT NULL,
  `route` varchar(255) DEFAULT NULL,
  `usage_count` int(11) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `route` (`route`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table bigtree_tags_rel
# ------------------------------------------------------------

DROP TABLE IF EXISTS `bigtree_tags_rel`;

CREATE TABLE `bigtree_tags_rel` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `table` varchar(255) NOT NULL,
  `tag` int(11) unsigned NOT NULL,
  `entry` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `tag` (`tag`),
  KEY `entry` (`entry`),
  CONSTRAINT `bigtree_tags_rel_ibfk_1` FOREIGN KEY (`tag`) REFERENCES `bigtree_tags` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table bigtree_user_sessions
# ------------------------------------------------------------

DROP TABLE IF EXISTS `bigtree_user_sessions`;

CREATE TABLE `bigtree_user_sessions` (
  `id` varchar(255) NOT NULL DEFAULT '',
  `email` varchar(255) DEFAULT NULL,
  `chain` varchar(255) DEFAULT NULL,
  `csrf_token` varchar(255) DEFAULT NULL,
  `csrf_token_field` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `email` (`email`),
  KEY `chain` (`chain`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `bigtree_user_sessions` WRITE;
/*!40000 ALTER TABLE `bigtree_user_sessions` DISABLE KEYS */;

INSERT INTO `bigtree_user_sessions` (`id`, `email`, `chain`, `csrf_token`, `csrf_token_field`)
VALUES
	('session-5b6347cc4424c6.44451896','deathstar@fastspot.com','chain-5b6347cc43ded6.12978631','yjKxCkBTaAss4USM/tJSb5oxv/7T0LDV6DSbJyJyimg=','__csrf_token_0E4N8QMP74VTP4M5MJ99MWJQ23NXCV9C__'),
	('session-5b635a2b2e9895.89062027','deathstar@fastspot.com','chain-5b635a2b2e5163.16265535','7I4JKdBEWuBPi22hUMXeYunCFYbet38ADd8TKdZH5Jc=','__csrf_token_C4668JFYCNPD2F7HNK53YYBAPALVCB8V__'),
	('session-5c0edde015a639.70684588','deathstar@fastspot.com','chain-5c0edddf3e0f26.62283422','Ff1Ls8f5tHx9WVXX1UClU+OoOZbIScL9Gu2p/W0dokM=','__csrf_token_RQB8LX0Q0R13CNEMRMFE5HVVML8WCM5K__');

/*!40000 ALTER TABLE `bigtree_user_sessions` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table bigtree_users
# ------------------------------------------------------------

DROP TABLE IF EXISTS `bigtree_users`;

CREATE TABLE `bigtree_users` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL DEFAULT '',
  `password` varchar(255) NOT NULL DEFAULT '',
  `new_hash` char(2) NOT NULL,
  `2fa_secret` varchar(255) NOT NULL,
  `2fa_login_token` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL DEFAULT '',
  `company` varchar(255) NOT NULL DEFAULT '',
  `level` int(11) unsigned NOT NULL DEFAULT '0',
  `permissions` text NOT NULL,
  `alerts` text NOT NULL,
  `daily_digest` char(2) NOT NULL,
  `timezone` varchar(255) NOT NULL,
  `change_password_hash` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `email` (`email`),
  KEY `password` (`password`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `bigtree_users` WRITE;
/*!40000 ALTER TABLE `bigtree_users` DISABLE KEYS */;

INSERT INTO `bigtree_users` (`id`, `email`, `password`, `new_hash`, `2fa_secret`, `2fa_login_token`, `name`, `company`, `level`, `permissions`, `alerts`, `daily_digest`, `timezone`, `change_password_hash`)
VALUES
	(1,'deathstar@fastspot.com','$2y$10$y6jsAwPLgnP.9vEv/Js3MeptAg0BkxHry3vah87yQhSNVK3YckkNy','on','','','Developer','',2,'','','','','');

/*!40000 ALTER TABLE `bigtree_users` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table btx_alerts
# ------------------------------------------------------------

DROP TABLE IF EXISTS `btx_alerts`;

CREATE TABLE `btx_alerts` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `description` text,
  `link` varchar(255) DEFAULT NULL,
  `archived` char(2) NOT NULL,
  `last_updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `internal_notes` text,
  `start_date` datetime DEFAULT NULL,
  `end_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table btx_events_categories
# ------------------------------------------------------------

DROP TABLE IF EXISTS `btx_events_categories`;

CREATE TABLE `btx_events_categories` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `parent` int(11) unsigned DEFAULT NULL,
  `title` varchar(255) NOT NULL DEFAULT '',
  `route` varchar(255) NOT NULL DEFAULT '',
  `position` int(11) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `parent` (`parent`),
  KEY `route` (`route`),
  KEY `position` (`position`),
  KEY `title` (`title`),
  CONSTRAINT `btx_events_categories_ibfk_1` FOREIGN KEY (`parent`) REFERENCES `btx_events_categories` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table btx_events_date_cache
# ------------------------------------------------------------

DROP TABLE IF EXISTS `btx_events_date_cache`;

CREATE TABLE `btx_events_date_cache` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `event` int(11) unsigned NOT NULL,
  `start` datetime NOT NULL,
  `end` datetime NOT NULL,
  `date_cached` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `title_route` varchar(255) NOT NULL DEFAULT '',
  `date_route` varchar(255) NOT NULL DEFAULT '',
  `route` varchar(1000) NOT NULL DEFAULT '',
  `all_day` char(2) NOT NULL DEFAULT '',
  `end_time` time DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `rule` int(11) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `event` (`event`),
  KEY `start` (`start`),
  KEY `end` (`end`),
  KEY `title_route` (`title_route`),
  KEY `date_route` (`date_route`),
  KEY `date_cached` (`date_cached`),
  KEY `rule` (`rule`),
  CONSTRAINT `btx_events_date_cache_ibfk_1` FOREIGN KEY (`event`) REFERENCES `btx_events_events` (`id`) ON DELETE CASCADE,
  CONSTRAINT `btx_events_date_cache_ibfk_2` FOREIGN KEY (`rule`) REFERENCES `btx_events_recurrence_rules` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table btx_events_date_cache_canceled
# ------------------------------------------------------------

DROP TABLE IF EXISTS `btx_events_date_cache_canceled`;

CREATE TABLE `btx_events_date_cache_canceled` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `event` int(11) unsigned DEFAULT NULL,
  `start` datetime DEFAULT NULL,
  `end` datetime DEFAULT NULL,
  `all_day` char(2) NOT NULL DEFAULT '',
  `date_cached` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `date` date DEFAULT NULL,
  `rule` int(11) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `event` (`event`),
  KEY `date_cached` (`date_cached`),
  KEY `rule` (`rule`),
  CONSTRAINT `btx_events_date_cache_canceled_ibfk_1` FOREIGN KEY (`event`) REFERENCES `btx_events_events` (`id`) ON DELETE CASCADE,
  CONSTRAINT `btx_events_date_cache_canceled_ibfk_2` FOREIGN KEY (`rule`) REFERENCES `btx_events_recurrence_rules` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table btx_events_event_categories
# ------------------------------------------------------------

DROP TABLE IF EXISTS `btx_events_event_categories`;

CREATE TABLE `btx_events_event_categories` (
  `event` int(11) unsigned NOT NULL,
  `category` int(11) unsigned NOT NULL,
  KEY `event` (`event`),
  KEY `category` (`category`),
  CONSTRAINT `btx_events_event_categories_ibfk_1` FOREIGN KEY (`event`) REFERENCES `btx_events_events` (`id`) ON DELETE CASCADE,
  CONSTRAINT `btx_events_event_categories_ibfk_2` FOREIGN KEY (`category`) REFERENCES `btx_events_categories` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table btx_events_events
# ------------------------------------------------------------

DROP TABLE IF EXISTS `btx_events_events`;

CREATE TABLE `btx_events_events` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL DEFAULT '',
  `blurb` text NOT NULL,
  `content` longtext NOT NULL,
  `link` varchar(255) NOT NULL DEFAULT '',
  `image` varchar(255) NOT NULL,
  `location` int(11) DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `start_time` time DEFAULT NULL,
  `end_time` time DEFAULT NULL,
  `all_day` char(2) NOT NULL,
  `route` varchar(255) NOT NULL,
  `featured` char(2) NOT NULL,
  `last_updated` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `start_date` (`start_date`),
  KEY `end_date` (`end_date`),
  KEY `featured` (`featured`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table btx_events_locations
# ------------------------------------------------------------

DROP TABLE IF EXISTS `btx_events_locations`;

CREATE TABLE `btx_events_locations` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL DEFAULT '',
  `street` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `zip` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `route` varchar(255) NOT NULL,
  `position` int(11) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `route` (`route`),
  KEY `position` (`position`),
  KEY `title` (`title`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table btx_events_recurrence_rules
# ------------------------------------------------------------

DROP TABLE IF EXISTS `btx_events_recurrence_rules`;

CREATE TABLE `btx_events_recurrence_rules` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `event` int(11) unsigned NOT NULL,
  `type` varchar(255) NOT NULL DEFAULT '',
  `rule` varchar(255) NOT NULL DEFAULT '',
  `recurring_end_date` date DEFAULT NULL,
  `cancellations` longtext NOT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `start_time` time DEFAULT NULL,
  `end_time` time DEFAULT NULL,
  `all_day` char(2) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `event` (`event`),
  CONSTRAINT `btx_events_recurrence_rules_ibfk_1` FOREIGN KEY (`event`) REFERENCES `btx_events_events` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table btx_form_builder_entries
# ------------------------------------------------------------

DROP TABLE IF EXISTS `btx_form_builder_entries`;

CREATE TABLE `btx_form_builder_entries` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `form` int(11) NOT NULL,
  `data` longtext NOT NULL,
  `created_at` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`),
  KEY `form` (`form`),
  CONSTRAINT `btx_form_builder_entries_ibfk_1` FOREIGN KEY (`form`) REFERENCES `btx_form_builder_forms` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table btx_form_builder_fields
# ------------------------------------------------------------

DROP TABLE IF EXISTS `btx_form_builder_fields`;

CREATE TABLE `btx_form_builder_fields` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `form` int(11) NOT NULL,
  `column` int(11) NOT NULL,
  `alignment` char(5) NOT NULL,
  `type` varchar(255) NOT NULL DEFAULT '',
  `data` longtext NOT NULL,
  `position` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `form` (`form`),
  KEY `column` (`column`),
  KEY `position` (`position`),
  CONSTRAINT `btx_form_builder_fields_ibfk_1` FOREIGN KEY (`form`) REFERENCES `btx_form_builder_forms` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table btx_form_builder_forms
# ------------------------------------------------------------

DROP TABLE IF EXISTS `btx_form_builder_forms`;

CREATE TABLE `btx_form_builder_forms` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL DEFAULT '',
  `paid` char(2) NOT NULL DEFAULT '',
  `base_price` float NOT NULL,
  `early_bird_base_price` float NOT NULL,
  `early_bird_date` datetime DEFAULT NULL,
  `total_collected` float NOT NULL,
  `entries` int(11) NOT NULL,
  `limit_entries` char(2) NOT NULL DEFAULT '',
  `max_entries` int(11) NOT NULL,
  `scheduling` char(2) NOT NULL,
  `scheduling_open_date` datetime DEFAULT NULL,
  `scheduling_close_date` datetime DEFAULT NULL,
  `scheduling_before_message` longtext,
  `scheduling_after_message` longtext,
  `last_entry` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table btx_news
# ------------------------------------------------------------

DROP TABLE IF EXISTS `btx_news`;

CREATE TABLE `btx_news` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `title` varchar(255) NOT NULL DEFAULT '',
  `blurb` text NOT NULL,
  `content` text NOT NULL,
  `in_content_callouts` longtext NOT NULL,
  `full_width_callouts` longtext NOT NULL,
  `image` varchar(255) NOT NULL DEFAULT '',
  `external_link` varchar(255) NOT NULL DEFAULT '',
  `featured` char(2) NOT NULL,
  `route` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `featured` (`featured`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table btx_news_categories
# ------------------------------------------------------------

DROP TABLE IF EXISTS `btx_news_categories`;

CREATE TABLE `btx_news_categories` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL DEFAULT '',
  `hidden` char(2) NOT NULL DEFAULT '',
  `position` int(11) NOT NULL,
  `route` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `position` (`position`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table btx_news_categories_rel
# ------------------------------------------------------------

DROP TABLE IF EXISTS `btx_news_categories_rel`;

CREATE TABLE `btx_news_categories_rel` (
  `news` int(11) unsigned NOT NULL,
  `category` int(11) unsigned NOT NULL,
  KEY `news` (`news`),
  KEY `category` (`category`),
  CONSTRAINT `btx_news_categories_rel_ibfk_1` FOREIGN KEY (`news`) REFERENCES `btx_news` (`id`) ON DELETE CASCADE,
  CONSTRAINT `btx_news_categories_rel_ibfk_2` FOREIGN KEY (`category`) REFERENCES `btx_news_categories` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table btx_reusable_callouts
# ------------------------------------------------------------

DROP TABLE IF EXISTS `btx_reusable_callouts`;

CREATE TABLE `btx_reusable_callouts` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `type` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `data` longtext,
  `archived` char(2) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;




/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
