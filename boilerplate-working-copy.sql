# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: localhost (MySQL 5.6.38)
# Database: boilerplate
# Generation Time: 2018-08-10 16:15:51 +0000
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
	(57,1,'bigtree_modules','4','updated','2018-08-02 15:43:15'),
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
	(82,1,'bigtree_modules','5','created','2018-08-03 14:25:05'),
	(83,1,'bigtree_module_forms','4','created','2018-08-03 14:27:40'),
	(84,1,'bigtree_module_actions','18','created','2018-08-03 14:27:40'),
	(85,1,'bigtree_module_actions','19','created','2018-08-03 14:27:40'),
	(86,1,'bigtree_module_views','6','created','2018-08-03 14:27:55'),
	(87,1,'bigtree_module_actions','20','created','2018-08-03 14:27:55'),
	(88,1,'bigtree_modules','6','created','2018-08-03 14:28:16'),
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
	(107,1,'bigtree_module_forms','2','updated','2018-08-03 16:33:47');

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



# Dump of table bigtree_callout_groups
# ------------------------------------------------------------

DROP TABLE IF EXISTS `bigtree_callout_groups`;

CREATE TABLE `bigtree_callout_groups` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `callouts` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `bigtree_callout_groups` WRITE;
/*!40000 ALTER TABLE `bigtree_callout_groups` DISABLE KEYS */;

INSERT INTO `bigtree_callout_groups` (`id`, `name`, `callouts`)
VALUES
	(1,'Full Width','[\n    \"contact-info\",\n    \"facts-stats\",\n    \"flexible-callout\",\n    \"testimonial\",\n    \"wysiwyg\"\n]'),
	(2,'In Content','[\n    \"link-list\",\n    \"media-gallery\",\n    \"topic-row\",\n    \"topic-rows\",\n    \"wysiwyg\"\n]'),
	(3,'Sidebar','null'),
	(4,'Home','null');

/*!40000 ALTER TABLE `bigtree_callout_groups` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table bigtree_callouts
# ------------------------------------------------------------

DROP TABLE IF EXISTS `bigtree_callouts`;

CREATE TABLE `bigtree_callouts` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL DEFAULT '',
  `description` text NOT NULL,
  `display_default` varchar(255) NOT NULL,
  `display_field` varchar(255) NOT NULL,
  `resources` text NOT NULL,
  `level` int(11) unsigned NOT NULL,
  `position` int(11) unsigned NOT NULL,
  `extension` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `extension` (`extension`),
  CONSTRAINT `bigtree_callouts_ibfk_1` FOREIGN KEY (`extension`) REFERENCES `bigtree_extensions` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `bigtree_callouts` WRITE;
/*!40000 ALTER TABLE `bigtree_callouts` DISABLE KEYS */;

INSERT INTO `bigtree_callouts` (`id`, `name`, `description`, `display_default`, `display_field`, `resources`, `level`, `position`, `extension`)
VALUES
	('contact-info','Contact Info','','','','[\n    {\n        \"id\": \"name\",\n        \"type\": \"text\",\n        \"title\": \"Name\",\n        \"subtitle\": \"\",\n        \"settings\": {\n            \"validation\": \"required\",\n            \"sub_type\": \"\",\n            \"max_length\": \"\"\n        }\n    },\n    {\n        \"id\": \"title\",\n        \"type\": \"text\",\n        \"title\": \"Title\",\n        \"subtitle\": \"\",\n        \"settings\": null\n    },\n    {\n        \"id\": \"image\",\n        \"type\": \"upload\",\n        \"title\": \"Image\",\n        \"subtitle\": \"(min 300x300)\",\n        \"settings\": {\n            \"directory\": \"files/pages/\",\n            \"image\": \"on\",\n            \"min_width\": \"300\",\n            \"min_height\": \"300\",\n            \"preview_prefix\": \"square-xxsml-\",\n            \"crops\": [\n                {\n                    \"prefix\": \"square-xxsml-\",\n                    \"width\": \"300\",\n                    \"height\": \"300\",\n                    \"grayscale\": \"\"\n                }\n            ],\n            \"thumbs\": [\n                {\n                    \"prefix\": \"\",\n                    \"width\": \"1440\",\n                    \"height\": \"1440\",\n                    \"grayscale\": \"\"\n                }\n            ]\n        }\n    },\n    {\n        \"id\": \"address\",\n        \"type\": \"textarea\",\n        \"title\": \"Address\",\n        \"subtitle\": \"\",\n        \"settings\": null\n    },\n    {\n        \"id\": \"phone\",\n        \"type\": \"text\",\n        \"title\": \"Phone Number\",\n        \"subtitle\": \"\",\n        \"settings\": null\n    },\n    {\n        \"id\": \"fax\",\n        \"type\": \"text\",\n        \"title\": \"Fax Number\",\n        \"subtitle\": \"\",\n        \"settings\": null\n    },\n    {\n        \"id\": \"email\",\n        \"type\": \"text\",\n        \"title\": \"Email Address\",\n        \"subtitle\": \"\",\n        \"settings\": {\n            \"validation\": \"email\",\n            \"sub_type\": \"\",\n            \"max_length\": \"\"\n        }\n    },\n    {\n        \"id\": \"social\",\n        \"type\": \"matrix\",\n        \"title\": \"Social Links\",\n        \"subtitle\": \"\",\n        \"settings\": {\n            \"max\": \"\",\n            \"style\": \"list\",\n            \"columns\": [\n                {\n                    \"type\": \"list\",\n                    \"id\": \"service\",\n                    \"title\": \"Service\",\n                    \"subtitle\": \"\",\n                    \"display_title\": \"on\",\n                    \"settings\": \"{\\\"validation\\\":\\\"required\\\",\\\"list_type\\\":\\\"static\\\",\\\"allow-empty\\\":\\\"Yes\\\",\\\"list\\\":[{\\\"value\\\":\\\"Facebook\\\",\\\"description\\\":\\\"Facebook\\\"},{\\\"value\\\":\\\"Twitter\\\",\\\"description\\\":\\\"Twitter\\\"},{\\\"value\\\":\\\"Instagram\\\",\\\"description\\\":\\\"Instagram\\\"},{\\\"value\\\":\\\"LinkedIn\\\",\\\"description\\\":\\\"LinkedIn\\\"},{\\\"value\\\":\\\"YouTube\\\",\\\"description\\\":\\\"YouTube\\\"},{\\\"value\\\":\\\"Vimeo\\\",\\\"description\\\":\\\"Vimeo\\\"},{\\\"value\\\":\\\"Flickr\\\",\\\"description\\\":\\\"Flickr\\\"}],\\\"pop-table\\\":\\\"\\\",\\\"parser\\\":\\\"\\\"}\"\n                },\n                {\n                    \"type\": \"text\",\n                    \"id\": \"url\",\n                    \"title\": \"URL\",\n                    \"subtitle\": \"(include http://)\",\n                    \"settings\": \"{\\\"validation\\\":\\\"link required\\\",\\\"sub_type\\\":\\\"\\\",\\\"max_length\\\":\\\"\\\"}\"\n                }\n            ]\n        }\n    }\n]',0,3,NULL),
	('facts-stats','Facts &amp; Stats','','','title','[\n    {\n        \"id\": \"title\",\n        \"type\": \"text\",\n        \"title\": \"Title\",\n        \"subtitle\": \"\",\n        \"settings\": null\n    },\n    {\n        \"id\": \"intro\",\n        \"type\": \"textarea\",\n        \"title\": \"Introduction\",\n        \"subtitle\": \"\",\n        \"settings\": null\n    },\n    {\n        \"id\": \"items\",\n        \"type\": \"matrix\",\n        \"title\": \"Items\",\n        \"subtitle\": \"\",\n        \"settings\": {\n            \"max\": \"\",\n            \"style\": \"list\",\n            \"columns\": [\n                {\n                    \"type\": \"text\",\n                    \"id\": \"title\",\n                    \"title\": \"Title\",\n                    \"subtitle\": \"(or qualifier)\",\n                    \"settings\": \"{\\\"validation\\\":\\\"required\\\",\\\"sub_type\\\":\\\"\\\",\\\"max_length\\\":\\\"\\\"}\"\n                },\n                {\n                    \"type\": \"list\",\n                    \"id\": \"theme\",\n                    \"title\": \"Theme\",\n                    \"subtitle\": \"\",\n                    \"settings\": \"\"\n                },\n                {\n                    \"type\": \"textarea\",\n                    \"id\": \"description\",\n                    \"title\": \"Description\",\n                    \"subtitle\": \"\",\n                    \"display_title\": \"on\",\n                    \"settings\": \"\"\n                },\n                {\n                    \"display_title\": \"on\",\n                    \"type\": \"upload\",\n                    \"id\": \"image\",\n                    \"title\": \"Image\",\n                    \"subtitle\": \"(icon)\",\n                    \"settings\": \"{\\\"directory\\\":\\\"files/pages/\\\",\\\"image\\\":\\\"on\\\",\\\"min_width\\\":\\\"\\\",\\\"min_height\\\":\\\"\\\",\\\"preview_prefix\\\":\\\"\\\",\\\"thumbs\\\":[{\\\"prefix\\\":\\\"\\\",\\\"width\\\":\\\"200\\\",\\\"height\\\":\\\"200\\\",\\\"grayscale\\\":\\\"\\\"}]}\"\n                }\n            ]\n        }\n    }\n]',0,2,NULL),
	('flexible-callout','Flexible Callout','','','title','[\n    {\n        \"id\": \"theme\",\n        \"type\": \"list\",\n        \"title\": \"Theme\",\n        \"subtitle\": \"\",\n        \"settings\": null\n    },\n    {\n        \"id\": \"label\",\n        \"type\": \"text\",\n        \"title\": \"Label\",\n        \"subtitle\": \"(shows above Title)\",\n        \"settings\": null\n    },\n    {\n        \"id\": \"title\",\n        \"type\": \"text\",\n        \"title\": \"Title\",\n        \"subtitle\": \"\",\n        \"settings\": {\n            \"validation\": \"required\",\n            \"sub_type\": \"\",\n            \"max_length\": \"\"\n        }\n    },\n    {\n        \"id\": \"description\",\n        \"type\": \"textarea\",\n        \"title\": \"Description\",\n        \"subtitle\": \"\",\n        \"settings\": {\n            \"validation\": \"required\",\n            \"max_length\": \"\"\n        }\n    },\n    {\n        \"id\": \"image\",\n        \"type\": \"upload\",\n        \"title\": \"Background Image\",\n        \"subtitle\": \"(min 1220x686)\",\n        \"settings\": {\n            \"validation\": \"required\",\n            \"directory\": \"files/pages/\",\n            \"image\": \"on\",\n            \"min_width\": \"1220\",\n            \"min_height\": \"686\",\n            \"preview_prefix\": \"wide-xsml-\",\n            \"crops\": [\n                {\n                    \"prefix\": \"wide-lrg-\",\n                    \"width\": \"1220\",\n                    \"height\": \"686\",\n                    \"grayscale\": \"\",\n                    \"thumbs\": [\n                        null,\n                        {\n                            \"prefix\": \"wide-sml-\",\n                            \"width\": \"740\",\n                            \"height\": \"\",\n                            \"grayscale\": \"\"\n                        },\n                        {\n                            \"prefix\": \"wide-med-\",\n                            \"width\": \"980\",\n                            \"height\": \"\",\n                            \"grayscale\": \"\"\n                        },\n                        {\n                            \"prefix\": \"wide-xsml-\",\n                            \"width\": \"500\",\n                            \"height\": \"\",\n                            \"grayscale\": \"\"\n                        }\n                    ]\n                }\n            ],\n            \"thumbs\": [\n                {\n                    \"prefix\": \"\",\n                    \"width\": \"1440\",\n                    \"height\": \"1440\",\n                    \"grayscale\": \"\"\n                }\n            ]\n        }\n    },\n    {\n        \"id\": \"links\",\n        \"type\": \"matrix\",\n        \"title\": \"Links\",\n        \"subtitle\": \"\",\n        \"settings\": {\n            \"max\": \"2\",\n            \"style\": \"list\",\n            \"columns\": [\n                {\n                    \"type\": \"text\",\n                    \"id\": \"title\",\n                    \"title\": \"Title\",\n                    \"subtitle\": \"\",\n                    \"display_title\": \"on\",\n                    \"settings\": \"{\\\"validation\\\":\\\"required\\\",\\\"sub_type\\\":\\\"\\\",\\\"max_length\\\":\\\"\\\"}\"\n                },\n                {\n                    \"type\": \"com.fastspot.link-finder-field-type*link-finder\",\n                    \"id\": \"url\",\n                    \"title\": \"URL\",\n                    \"subtitle\": \"(include http://)\",\n                    \"settings\": \"{}\"\n                },\n                {\n                    \"type\": \"text\",\n                    \"id\": \"aria\",\n                    \"title\": \"Aria Label\",\n                    \"subtitle\": \"(optional, for screen readers)\",\n                    \"settings\": \"\"\n                }\n            ]\n        }\n    }\n]',0,1,NULL),
	('home-feature','Homepage Feature','','','','[]',0,9,NULL),
	('link-list','Link List','','','title','[\n    {\n        \"id\": \"theme\",\n        \"type\": \"list\",\n        \"title\": \"Theme\",\n        \"subtitle\": \"\",\n        \"settings\": {\n            \"list_type\": \"static\",\n            \"allow-empty\": \"No\",\n            \"list\": [\n                {\n                    \"value\": \"placeholder\",\n                    \"description\": \"Placeholder\"\n                }\n            ],\n            \"pop-table\": \"\",\n            \"parser\": \"\"\n        }\n    },\n    {\n        \"id\": \"title\",\n        \"type\": \"text\",\n        \"title\": \"Title\",\n        \"subtitle\": \"\",\n        \"settings\": null\n    },\n    {\n        \"id\": \"icon\",\n        \"type\": \"com.fastspot.hidden-value-field-type*hidden-value\",\n        \"title\": \"Icon\",\n        \"subtitle\": \"(sits next to title)\",\n        \"settings\": null\n    },\n    {\n        \"id\": \"links\",\n        \"type\": \"matrix\",\n        \"title\": \"Links\",\n        \"subtitle\": \"\",\n        \"settings\": {\n            \"max\": \"\",\n            \"style\": \"list\",\n            \"columns\": [\n                {\n                    \"type\": \"text\",\n                    \"id\": \"title\",\n                    \"title\": \"Title\",\n                    \"subtitle\": \"\",\n                    \"display_title\": \"on\",\n                    \"settings\": \"{\\\"validation\\\":\\\"required\\\",\\\"sub_type\\\":\\\"\\\",\\\"max_length\\\":\\\"\\\"}\"\n                },\n                {\n                    \"type\": \"com.fastspot.link-finder-field-type*link-finder\",\n                    \"id\": \"url\",\n                    \"title\": \"URL\",\n                    \"subtitle\": \"(include http://)\",\n                    \"settings\": \"\"\n                },\n                {\n                    \"type\": \"text\",\n                    \"id\": \"aria\",\n                    \"title\": \"Aria Label\",\n                    \"subtitle\": \"(optional, for screen readers)\",\n                    \"settings\": \"\"\n                },\n                {\n                    \"type\": \"com.fastspot.hidden-value-field-type*hidden-value\",\n                    \"id\": \"icon\",\n                    \"title\": \"Icon\",\n                    \"subtitle\": \"(sits next to links)\",\n                    \"settings\": \"\"\n                }\n            ]\n        }\n    }\n]',0,5,NULL),
	('media-gallery','Media Gallery','','','title','[\n    {\n        \"id\": \"theme\",\n        \"type\": \"list\",\n        \"title\": \"Theme\",\n        \"subtitle\": \"\",\n        \"settings\": {\n            \"list_type\": \"static\",\n            \"allow-empty\": \"No\",\n            \"list\": [\n                {\n                    \"value\": \"placeholder\",\n                    \"description\": \"Placeholder\"\n                }\n            ],\n            \"pop-table\": \"\",\n            \"parser\": \"\"\n        }\n    },\n    {\n        \"id\": \"title\",\n        \"type\": \"text\",\n        \"title\": \"Title\",\n        \"subtitle\": \"\",\n        \"settings\": null\n    },\n    {\n        \"id\": \"items\",\n        \"type\": \"com.fastspot.media-gallery-field-type*media-gallery\",\n        \"title\": \"Gallery Items\",\n        \"subtitle\": \"\",\n        \"settings\": {\n            \"max\": \"\",\n            \"directory\": \"files/galleries/\",\n            \"min_width\": \"980\",\n            \"min_height\": \"552\",\n            \"preview_prefix\": \"wide-xsml-\",\n            \"crops\": [\n                {\n                    \"prefix\": \"wide-med-\",\n                    \"width\": \"980\",\n                    \"height\": \"552\",\n                    \"grayscale\": \"\",\n                    \"thumbs\": [\n                        null,\n                        {\n                            \"prefix\": \"wide-xsml-\",\n                            \"width\": \"500\",\n                            \"height\": \"\",\n                            \"grayscale\": \"\"\n                        },\n                        {\n                            \"prefix\": \"wide-sml-\",\n                            \"width\": \"740\",\n                            \"height\": \"\",\n                            \"grayscale\": \"\"\n                        }\n                    ]\n                }\n            ],\n            \"thumbs\": [\n                {\n                    \"prefix\": \"\",\n                    \"width\": \"1440\",\n                    \"height\": \"1440\",\n                    \"grayscale\": \"\"\n                }\n            ],\n            \"columns\": [\n                {\n                    \"type\": \"html\",\n                    \"id\": \"caption\",\n                    \"title\": \"Caption\",\n                    \"subtitle\": \"(only bold and italic will show)\",\n                    \"options\": \"{\\\"simple\\\":\\\"on\\\",\\\"simple_by_permission\\\":\\\"0\\\"}\"\n                }\n            ]\n        }\n    }\n]',0,4,NULL),
	('testimonial','Testimonial','','','name','[\n    {\n        \"id\": \"name\",\n        \"type\": \"text\",\n        \"title\": \"Name\",\n        \"subtitle\": \"\",\n        \"settings\": {\n            \"validation\": \"required\",\n            \"sub_type\": \"\",\n            \"max_length\": \"\"\n        }\n    },\n    {\n        \"id\": \"title\",\n        \"type\": \"text\",\n        \"title\": \"Title\",\n        \"subtitle\": \"\",\n        \"settings\": null\n    },\n    {\n        \"id\": \"quote\",\n        \"type\": \"textarea\",\n        \"title\": \"Quote\",\n        \"subtitle\": \"\",\n        \"settings\": {\n            \"validation\": \"required\",\n            \"max_length\": \"\"\n        }\n    },\n    {\n        \"id\": \"image\",\n        \"type\": \"upload\",\n        \"title\": \"Image\",\n        \"subtitle\": \"(min 375x500)\",\n        \"settings\": {\n            \"validation\": \"required\",\n            \"directory\": \"files/pages/\",\n            \"image\": \"on\",\n            \"min_width\": \"375\",\n            \"min_height\": \"500\",\n            \"preview_prefix\": \"portrait-full-xsml-\",\n            \"crops\": [\n                {\n                    \"prefix\": \"portrait-full-xsml-\",\n                    \"width\": \"375\",\n                    \"height\": \"500\",\n                    \"grayscale\": \"\"\n                }\n            ],\n            \"thumbs\": [\n                {\n                    \"prefix\": \"\",\n                    \"width\": \"1440\",\n                    \"height\": \"1440\",\n                    \"grayscale\": \"\"\n                }\n            ]\n        }\n    },\n    {\n        \"id\": \"link_title\",\n        \"type\": \"text\",\n        \"title\": \"Link Title\",\n        \"subtitle\": \"\",\n        \"settings\": null\n    },\n    {\n        \"id\": \"link_url\",\n        \"type\": \"com.fastspot.link-finder-field-type*link-finder\",\n        \"title\": \"Link URL\",\n        \"subtitle\": \"(include http://)\",\n        \"settings\": null\n    },\n    {\n        \"id\": \"link_aria\",\n        \"type\": \"text\",\n        \"title\": \"Link Aria Label\",\n        \"subtitle\": \"(optional, for screen readers)\",\n        \"settings\": null\n    }\n]',0,0,NULL),
	('topic-row','Topic Row','','','title','[\n    {\n        \"id\": \"theme\",\n        \"type\": \"list\",\n        \"title\": \"Theme\",\n        \"subtitle\": \"\",\n        \"settings\": {\n            \"list_type\": \"static\",\n            \"allow-empty\": \"No\",\n            \"list\": [\n                {\n                    \"value\": \"placeholder\",\n                    \"description\": \"Placeholder\"\n                }\n            ],\n            \"pop-table\": \"\",\n            \"parser\": \"\"\n        }\n    },\n    {\n        \"id\": \"title\",\n        \"type\": \"text\",\n        \"title\": \"Title\",\n        \"subtitle\": \"\",\n        \"settings\": {\n            \"validation\": \"required\",\n            \"sub_type\": \"\",\n            \"max_length\": \"\"\n        }\n    },\n    {\n        \"id\": \"description\",\n        \"type\": \"html\",\n        \"title\": \"Description\",\n        \"subtitle\": \"(only line breaks, bold, and italic will show)\",\n        \"settings\": {\n            \"validation\": \"required\",\n            \"simple\": \"on\",\n            \"simple_by_permission\": \"0\"\n        }\n    },\n    {\n        \"id\": \"image\",\n        \"type\": \"upload\",\n        \"title\": \"Image\",\n        \"subtitle\": \"(min 500x500)\",\n        \"settings\": {\n            \"directory\": \"files/pages/\",\n            \"image\": \"on\",\n            \"min_width\": \"500\",\n            \"min_height\": \"500\",\n            \"preview_prefix\": \"square-xsml-\",\n            \"crops\": [\n                {\n                    \"prefix\": \"square-xsml-\",\n                    \"width\": \"500\",\n                    \"height\": \"500\",\n                    \"grayscale\": \"\"\n                }\n            ],\n            \"thumbs\": [\n                {\n                    \"prefix\": \"\",\n                    \"width\": \"1440\",\n                    \"height\": \"1440\",\n                    \"grayscale\": \"\"\n                }\n            ]\n        }\n    },\n    {\n        \"id\": \"links\",\n        \"type\": \"matrix\",\n        \"title\": \"Links\",\n        \"subtitle\": \"\",\n        \"settings\": {\n            \"max\": \"2\",\n            \"style\": \"list\",\n            \"columns\": [\n                {\n                    \"type\": \"text\",\n                    \"id\": \"title\",\n                    \"title\": \"Title\",\n                    \"subtitle\": \"\",\n                    \"display_title\": \"on\",\n                    \"settings\": \"{\\\"validation\\\":\\\"required\\\",\\\"sub_type\\\":\\\"\\\",\\\"max_length\\\":\\\"\\\"}\"\n                },\n                {\n                    \"type\": \"com.fastspot.link-finder-field-type*link-finder\",\n                    \"id\": \"url\",\n                    \"title\": \"URL\",\n                    \"subtitle\": \"(include http://)\",\n                    \"settings\": \"\"\n                },\n                {\n                    \"type\": \"text\",\n                    \"id\": \"aria\",\n                    \"title\": \"Aria Label\",\n                    \"subtitle\": \"(optional, for screen readers)\",\n                    \"settings\": \"\"\n                }\n            ]\n        }\n    }\n]',0,6,NULL),
	('topic-rows','Topic Rows','','','title','[\n    {\n        \"id\": \"theme\",\n        \"type\": \"list\",\n        \"title\": \"Theme\",\n        \"subtitle\": \"\",\n        \"settings\": {\n            \"list_type\": \"static\",\n            \"allow-empty\": \"No\",\n            \"list\": [\n                {\n                    \"value\": \"placeholder\",\n                    \"description\": \"Placeholder\"\n                }\n            ],\n            \"pop-table\": \"\",\n            \"parser\": \"\"\n        }\n    },\n    {\n        \"id\": \"title\",\n        \"type\": \"text\",\n        \"title\": \"Title\",\n        \"subtitle\": \"\",\n        \"settings\": null\n    },\n    {\n        \"id\": \"rows\",\n        \"type\": \"matrix\",\n        \"title\": \"Rows\",\n        \"subtitle\": \"\",\n        \"settings\": {\n            \"max\": \"\",\n            \"style\": \"list\",\n            \"columns\": [\n                {\n                    \"type\": \"text\",\n                    \"id\": \"title\",\n                    \"title\": \"Title\",\n                    \"subtitle\": \"\",\n                    \"display_title\": \"on\",\n                    \"settings\": \"{\\\"validation\\\":\\\"required\\\",\\\"sub_type\\\":\\\"\\\",\\\"max_length\\\":\\\"\\\"}\"\n                },\n                {\n                    \"type\": \"html\",\n                    \"id\": \"description\",\n                    \"title\": \"Description\",\n                    \"subtitle\": \"(only line breaks, bold, and italic will display)\",\n                    \"settings\": \"{\\\"validation\\\":\\\"required\\\",\\\"simple\\\":\\\"on\\\",\\\"simple_by_permission\\\":\\\"0\\\"}\"\n                },\n                {\n                    \"type\": \"upload\",\n                    \"id\": \"image\",\n                    \"title\": \"Image\",\n                    \"subtitle\": \"(min 500x500)\",\n                    \"settings\": \"{\\\"directory\\\":\\\"files/pages/\\\",\\\"image\\\":\\\"on\\\",\\\"min_width\\\":\\\"500\\\",\\\"min_height\\\":\\\"500\\\",\\\"preview_prefix\\\":\\\"square-xsml-\\\",\\\"crops\\\":[{\\\"prefix\\\":\\\"square-xsml-\\\",\\\"width\\\":\\\"500\\\",\\\"height\\\":\\\"500\\\",\\\"grayscale\\\":\\\"\\\"}],\\\"thumbs\\\":[{\\\"prefix\\\":\\\"\\\",\\\"width\\\":\\\"1440\\\",\\\"height\\\":\\\"1440\\\",\\\"grayscale\\\":\\\"\\\"}]}\"\n                },\n                {\n                    \"type\": \"matrix\",\n                    \"id\": \"links\",\n                    \"title\": \"Links\",\n                    \"subtitle\": \"\",\n                    \"settings\": \"{\\\"max\\\":\\\"2\\\",\\\"style\\\":\\\"list\\\",\\\"columns\\\":[{\\\"type\\\":\\\"text\\\",\\\"id\\\":\\\"title\\\",\\\"title\\\":\\\"Title\\\",\\\"subtitle\\\":\\\"\\\",\\\"display_title\\\":\\\"on\\\",\\\"settings\\\":\\\"{\\\\\\\"validation\\\\\\\":\\\\\\\"required\\\\\\\",\\\\\\\"sub_type\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"max_length\\\\\\\":\\\\\\\"\\\\\\\"}\\\"},{\\\"type\\\":\\\"com.fastspot.link-finder-field-type*link-finder\\\",\\\"id\\\":\\\"url\\\",\\\"title\\\":\\\"URL\\\",\\\"subtitle\\\":\\\"(include http://)\\\",\\\"settings\\\":\\\"\\\"},{\\\"type\\\":\\\"text\\\",\\\"id\\\":\\\"aria\\\",\\\"title\\\":\\\"Aria Label\\\",\\\"subtitle\\\":\\\"(optional, for screen readers)\\\",\\\"settings\\\":\\\"\\\"}]}\"\n                }\n            ]\n        }\n    }\n]',0,7,NULL),
	('wysiwyg','WYSIWYG','','','','[\n    {\n        \"id\": \"content\",\n        \"type\": \"html\",\n        \"title\": \"Content\",\n        \"subtitle\": \"\",\n        \"settings\": null\n    }\n]',0,8,NULL);

/*!40000 ALTER TABLE `bigtree_callouts` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table bigtree_extensions
# ------------------------------------------------------------

DROP TABLE IF EXISTS `bigtree_extensions`;

CREATE TABLE `bigtree_extensions` (
  `id` varchar(255) NOT NULL DEFAULT '',
  `type` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `version` varchar(255) DEFAULT NULL,
  `last_updated` datetime DEFAULT NULL,
  `manifest` longtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `bigtree_extensions` WRITE;
/*!40000 ALTER TABLE `bigtree_extensions` DISABLE KEYS */;

INSERT INTO `bigtree_extensions` (`id`, `type`, `name`, `version`, `last_updated`, `manifest`)
VALUES
	('com.fastspot.advanced-callouts','extension','Advanced Callout Field Types','1.0.3','2018-08-02 14:19:21','{\n    \"type\": \"extension\",\n    \"id\": \"com.fastspot.advanced-callouts\",\n    \"version\": \"1.0.3\",\n    \"revision\": 8,\n    \"compatibility\": \"4.2+\",\n    \"title\": \"Advanced Callout Field Types\",\n    \"description\": \"This extension implements two field types:\\r\\n\\r\\nPredefiend Callouts \\u2014 Allows you to choose individual callouts to prefill a callout area. You can optionally turn on or off dragability and the option to add more callouts from other groups. \\r\\n\\r\\nInline Callout Set \\u2014 Allows you to choose individual callouts to prefill a callout area but the callouts are drawn inline with section headers that you specify rather than in a dialog.\",\n    \"keywords\": [\n        \"callouts\",\n        \"predefined\",\n        \"inline\"\n    ],\n    \"author\": {\n        \"name\": \"Tim Buckingham\",\n        \"url\": \"http://www.fastspot.com\",\n        \"email\": \"tim@fastspot.com\"\n    },\n    \"licenses\": {\n        \"LGPL v3\": \"http://opensource.org/licenses/LGPL-3.0\"\n    },\n    \"components\": {\n        \"module_groups\": [],\n        \"modules\": [],\n        \"templates\": [],\n        \"callouts\": [],\n        \"settings\": [],\n        \"feeds\": [],\n        \"field_types\": [\n            {\n                \"id\": \"com.fastspot.advanced-callouts*inline-callout-set\",\n                \"name\": \"Inline Callout Set\",\n                \"use_cases\": {\n                    \"templates\": \"on\",\n                    \"modules\": \"on\",\n                    \"settings\": \"on\"\n                },\n                \"self_draw\": \"on\",\n                \"extension\": \"com.fastspot.advanced-callouts\"\n            },\n            {\n                \"id\": \"com.fastspot.advanced-callouts*predefined-callouts\",\n                \"name\": \"Predefined Callouts\",\n                \"use_cases\": {\n                    \"templates\": \"on\",\n                    \"modules\": \"on\",\n                    \"settings\": \"on\"\n                },\n                \"self_draw\": \"on\",\n                \"extension\": \"com.fastspot.advanced-callouts\"\n            }\n        ],\n        \"tables\": []\n    },\n    \"sql_revisions\": []\n}'),
	('com.fastspot.date-range','extension','Date Range Field Type','1.0','2018-08-02 14:19:26','{\n    \"type\": \"extension\",\n    \"id\": \"com.fastspot.date-range\",\n    \"version\": \"1.0\",\n    \"revision\": 1,\n    \"compatibility\": \"4.2.x\",\n    \"title\": \"Date Range Field Type\",\n    \"description\": \"\",\n    \"keywords\": [\n        \"\"\n    ],\n    \"author\": {\n        \"name\": \"\",\n        \"email\": \"\",\n        \"url\": \"\"\n    },\n    \"licenses\": {\n        \"LGPL v3\": \"http://opensource.org/licenses/LGPL-3.0\"\n    },\n    \"components\": {\n        \"module_groups\": [],\n        \"modules\": [],\n        \"templates\": [],\n        \"callouts\": [],\n        \"settings\": [],\n        \"feeds\": [],\n        \"field_types\": [\n            {\n                \"id\": \"com.fastspot.date-range*date-range\",\n                \"name\": \"Date Range\",\n                \"use_cases\": {\n                    \"templates\": \"on\",\n                    \"modules\": \"on\",\n                    \"callouts\": \"on\",\n                    \"settings\": \"on\"\n                },\n                \"self_draw\": null,\n                \"extension\": \"com.fastspot.date-range\"\n            }\n        ],\n        \"tables\": []\n    }\n}'),
	('com.fastspot.events','extension','Events','1.2.1','2018-08-02 14:19:32','{\n    \"type\": \"extension\",\n    \"id\": \"com.fastspot.events\",\n    \"version\": \"1.2.1\",\n    \"revision\": 6,\n    \"compatibility\": \"4.2.4+\",\n    \"title\": \"Events\",\n    \"description\": \"A very fast (performance wise) events system that supports recurring events and a powerful class for pulling events into the front end of your site.\",\n    \"keywords\": [\n        \"events\",\n        \"recurring\"\n    ],\n    \"author\": {\n        \"name\": \"Tim Buckingham\",\n        \"url\": \"http://www.fastspot.com\",\n        \"email\": \"tim@fastspot.com\"\n    },\n    \"licenses\": {\n        \"LGPL v3\": \"http://opensource.org/licenses/LGPL-3.0\"\n    },\n    \"components\": {\n        \"module_groups\": [],\n        \"modules\": [\n            {\n                \"id\": 1,\n                \"group\": null,\n                \"name\": \"Events\",\n                \"route\": \"com.fastspot.events*events\",\n                \"class\": \"BTXEvents\",\n                \"icon\": \"events\",\n                \"gbp\": {\n                    \"name\": \"\",\n                    \"table\": \"\",\n                    \"other_table\": \"\"\n                },\n                \"position\": \"0\",\n                \"extension\": \"com.fastspot.events\",\n                \"actions\": [\n                    {\n                        \"id\": \"7\",\n                        \"module\": \"3\",\n                        \"name\": \"View Events\",\n                        \"route\": \"\",\n                        \"in_nav\": \"on\",\n                        \"form\": null,\n                        \"view\": \"4\",\n                        \"report\": null,\n                        \"class\": \"list\",\n                        \"level\": \"0\",\n                        \"position\": \"6\"\n                    },\n                    {\n                        \"id\": \"8\",\n                        \"module\": \"3\",\n                        \"name\": \"Search\",\n                        \"route\": \"search\",\n                        \"in_nav\": \"on\",\n                        \"form\": null,\n                        \"view\": null,\n                        \"report\": null,\n                        \"class\": \"search2\",\n                        \"level\": \"0\",\n                        \"position\": \"5\"\n                    },\n                    {\n                        \"id\": \"9\",\n                        \"module\": \"3\",\n                        \"name\": \"Calendar\",\n                        \"route\": \"calendar\",\n                        \"in_nav\": \"on\",\n                        \"form\": null,\n                        \"view\": null,\n                        \"report\": null,\n                        \"class\": \"calendar2\",\n                        \"level\": \"0\",\n                        \"position\": \"4\"\n                    },\n                    {\n                        \"id\": \"10\",\n                        \"module\": \"3\",\n                        \"name\": \"Add Event\",\n                        \"route\": \"add\",\n                        \"in_nav\": \"on\",\n                        \"form\": \"4\",\n                        \"view\": null,\n                        \"report\": null,\n                        \"class\": \"add\",\n                        \"level\": \"0\",\n                        \"position\": \"3\"\n                    },\n                    {\n                        \"id\": \"11\",\n                        \"module\": \"3\",\n                        \"name\": \"View Categories\",\n                        \"route\": \"categories\",\n                        \"in_nav\": \"on\",\n                        \"form\": null,\n                        \"view\": \"3\",\n                        \"report\": null,\n                        \"class\": \"category\",\n                        \"level\": \"0\",\n                        \"position\": \"2\"\n                    },\n                    {\n                        \"id\": \"12\",\n                        \"module\": \"3\",\n                        \"name\": \"Add Category\",\n                        \"route\": \"add-category\",\n                        \"in_nav\": \"on\",\n                        \"form\": \"3\",\n                        \"view\": null,\n                        \"report\": null,\n                        \"class\": \"add\",\n                        \"level\": \"0\",\n                        \"position\": \"1\"\n                    },\n                    {\n                        \"id\": \"13\",\n                        \"module\": \"3\",\n                        \"name\": \"Edit Event\",\n                        \"route\": \"edit\",\n                        \"in_nav\": \"\",\n                        \"form\": \"4\",\n                        \"view\": null,\n                        \"report\": null,\n                        \"class\": \"edit\",\n                        \"level\": \"0\",\n                        \"position\": \"0\"\n                    },\n                    {\n                        \"id\": \"14\",\n                        \"module\": \"3\",\n                        \"name\": \"Edit Category\",\n                        \"route\": \"edit-category\",\n                        \"in_nav\": \"\",\n                        \"form\": \"3\",\n                        \"view\": null,\n                        \"report\": null,\n                        \"class\": \"edit\",\n                        \"level\": \"0\",\n                        \"position\": \"0\"\n                    }\n                ],\n                \"views\": [\n                    {\n                        \"id\": \"3\",\n                        \"module\": \"3\",\n                        \"title\": \"Categories\",\n                        \"description\": \"\",\n                        \"type\": \"nested\",\n                        \"table\": \"btx_events_categories\",\n                        \"fields\": {\n                            \"name\": {\n                                \"width\": \"788\",\n                                \"title\": \"Name\",\n                                \"parser\": \"\",\n                                \"numeric\": false\n                            }\n                        },\n                        \"options\": {\n                            \"nesting_column\": \"parent\",\n                            \"filter\": \"\"\n                        },\n                        \"actions\": {\n                            \"edit\": \"on\",\n                            \"delete\": \"on\"\n                        },\n                        \"preview_url\": \"\",\n                        \"related_form\": null\n                    },\n                    {\n                        \"id\": \"4\",\n                        \"module\": \"3\",\n                        \"title\": \"Events\",\n                        \"description\": \"\",\n                        \"type\": \"searchable\",\n                        \"table\": \"btx_events_events\",\n                        \"fields\": {\n                            \"start_date\": {\n                                \"title\": \"Start Date\",\n                                \"parser\": \"\",\n                                \"width\": \"98\",\n                                \"numeric\": false\n                            },\n                            \"title\": {\n                                \"title\": \"Title\",\n                                \"parser\": \"\",\n                                \"width\": \"521\",\n                                \"numeric\": false\n                            },\n                            \"recurrence_type\": {\n                                \"title\": \"Recurring\",\n                                \"parser\": \"\",\n                                \"width\": \"89\",\n                                \"numeric\": false\n                            }\n                        },\n                        \"options\": {\n                            \"sort_column\": \"start_date\",\n                            \"sort_direction\": \"DESC\",\n                            \"per_page\": \"15\",\n                            \"filter\": \"\"\n                        },\n                        \"actions\": {\n                            \"feature\": \"on\",\n                            \"edit\": \"on\",\n                            \"delete\": \"on\"\n                        },\n                        \"preview_url\": \"\",\n                        \"related_form\": null\n                    }\n                ],\n                \"forms\": [\n                    {\n                        \"id\": \"3\",\n                        \"module\": \"3\",\n                        \"title\": \"Category\",\n                        \"table\": \"btx_events_categories\",\n                        \"fields\": [\n                            {\n                                \"column\": \"parent\",\n                                \"type\": \"list\",\n                                \"title\": \"Parent Category\",\n                                \"subtitle\": \"\",\n                                \"options\": {\n                                    \"list_type\": \"db\",\n                                    \"allow-empty\": \"Yes\",\n                                    \"pop-table\": \"btx_events_categories\",\n                                    \"pop-description\": \"name\",\n                                    \"pop-sort\": \"`name` ASC\",\n                                    \"column\": \"parent\"\n                                }\n                            },\n                            {\n                                \"column\": \"name\",\n                                \"type\": \"text\",\n                                \"title\": \"Name\",\n                                \"subtitle\": \"\",\n                                \"options\": {\n                                    \"column\": \"name\"\n                                }\n                            },\n                            {\n                                \"column\": \"route\",\n                                \"type\": \"route\",\n                                \"title\": \"Route\",\n                                \"subtitle\": \"\",\n                                \"options\": {\n                                    \"source\": \"name\",\n                                    \"column\": \"route\"\n                                }\n                            }\n                        ],\n                        \"default_position\": \"Bottom\",\n                        \"return_view\": \"3\",\n                        \"return_url\": \"\",\n                        \"tagging\": \"\",\n                        \"hooks\": null\n                    },\n                    {\n                        \"id\": \"4\",\n                        \"module\": \"3\",\n                        \"title\": \"Event\",\n                        \"table\": \"btx_events_events\",\n                        \"fields\": [\n                            {\n                                \"column\": \"title\",\n                                \"type\": \"text\",\n                                \"title\": \"Title\",\n                                \"subtitle\": \"\",\n                                \"options\": {\n                                    \"column\": \"title\"\n                                }\n                            },\n                            {\n                                \"column\": \"description\",\n                                \"type\": \"html\",\n                                \"title\": \"Description\",\n                                \"subtitle\": \"\",\n                                \"options\": {\n                                    \"column\": \"description\"\n                                }\n                            },\n                            {\n                                \"column\": \"image\",\n                                \"type\": \"upload\",\n                                \"title\": \"Image\",\n                                \"subtitle\": \"(crops to 600x400)\",\n                                \"options\": {\n                                    \"directory\": \"files/events/\",\n                                    \"image\": \"on\",\n                                    \"min_width\": \"600\",\n                                    \"min_height\": \"400\",\n                                    \"preview_prefix\": \"\",\n                                    \"crops\": {\n                                        \"1\": {\n                                            \"prefix\": \"\",\n                                            \"width\": \"600\",\n                                            \"height\": \"400\",\n                                            \"grayscale\": \"\"\n                                        }\n                                    },\n                                    \"column\": \"image\"\n                                }\n                            },\n                            {\n                                \"column\": \"__mtm-1__\",\n                                \"type\": \"many-to-many\",\n                                \"title\": \"Categories\",\n                                \"subtitle\": \"\",\n                                \"options\": {\n                                    \"mtm-connecting-table\": \"btx_events_event_categories\",\n                                    \"mtm-my-id\": \"event\",\n                                    \"mtm-other-id\": \"category\",\n                                    \"mtm-other-table\": \"btx_events_categories\",\n                                    \"mtm-other-descriptor\": \"name\",\n                                    \"mtm-sort\": \"`name` ASC\",\n                                    \"mtm-list-parser\": \"BTXEvents::parseMTM\",\n                                    \"column\": \"__mtm-1__\"\n                                }\n                            },\n                            {\n                                \"column\": \"all_day\",\n                                \"type\": \"com.fastspot.events*date-chooser\",\n                                \"title\": \"Date Chooser\",\n                                \"subtitle\": \"\",\n                                \"options\": {\n                                    \"function\": \"BTXEvents::drawFormDateTime\",\n                                    \"process_function\": \"BTXEvents::parseFormDateTime\",\n                                    \"column\": \"all_day\"\n                                }\n                            },\n                            {\n                                \"column\": \"route\",\n                                \"type\": \"route\",\n                                \"title\": \"Route\",\n                                \"subtitle\": \"\",\n                                \"options\": {\n                                    \"source\": \"title\",\n                                    \"column\": \"route\"\n                                }\n                            }\n                        ],\n                        \"default_position\": \"\",\n                        \"return_view\": \"4\",\n                        \"return_url\": \"\",\n                        \"tagging\": \"\",\n                        \"hooks\": {\n                            \"pre\": \"\",\n                            \"post\": \"\",\n                            \"publish\": \"BTXEvents::publishHook\"\n                        }\n                    }\n                ],\n                \"embed_forms\": [],\n                \"reports\": []\n            }\n        ],\n        \"templates\": [],\n        \"callouts\": [],\n        \"settings\": [],\n        \"feeds\": [],\n        \"field_types\": [\n            {\n                \"id\": \"com.fastspot.events*date-chooser\",\n                \"name\": \"Events \\u2014 Date Chooser\",\n                \"use_cases\": {\n                    \"modules\": \"on\"\n                },\n                \"self_draw\": \"on\",\n                \"extension\": \"com.fastspot.events\"\n            }\n        ],\n        \"tables\": {\n            \"btx_events_categories\": \"CREATE TABLE `btx_events_categories` (   `id` int(11) NOT NULL AUTO_INCREMENT,   `parent` int(11) DEFAULT NULL,   `name` varchar(255) NOT NULL DEFAULT \'\',   `route` varchar(255) NOT NULL DEFAULT \'\',   `position` int(11) NOT NULL,   PRIMARY KEY (`id`),   KEY `parent` (`parent`),   KEY `route` (`route`),   KEY `position` (`position`) ) ENGINE=InnoDB DEFAULT CHARSET=utf8\",\n            \"btx_events_date_cache\": \"CREATE TABLE `btx_events_date_cache` (   `id` int(11) NOT NULL AUTO_INCREMENT,   `event` int(11) NOT NULL,   `start` datetime NOT NULL,   `end` datetime NOT NULL,   `date_cached` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,   `title_route` varchar(255) NOT NULL DEFAULT \'\',   `date_route` varchar(255) NOT NULL DEFAULT \'\',   PRIMARY KEY (`id`),   KEY `event` (`event`),   KEY `start` (`start`),   KEY `end` (`end`),   KEY `title_route` (`title_route`),   KEY `date_route` (`date_route`),   KEY `date_cached` (`date_cached`),    FOREIGN KEY (`event`) REFERENCES `btx_events_events` (`id`) ON DELETE CASCADE ) ENGINE=InnoDB DEFAULT CHARSET=utf8\",\n            \"btx_events_event_categories\": \"CREATE TABLE `btx_events_event_categories` (   `event` int(11) NOT NULL,   `category` int(11) NOT NULL,   KEY `event` (`event`),   KEY `category` (`category`),    FOREIGN KEY (`event`) REFERENCES `btx_events_events` (`id`) ON DELETE CASCADE,    FOREIGN KEY (`category`) REFERENCES `btx_events_categories` (`id`) ON DELETE CASCADE ) ENGINE=InnoDB DEFAULT CHARSET=utf8\",\n            \"btx_events_events\": \"CREATE TABLE `btx_events_events` (   `id` int(11) NOT NULL AUTO_INCREMENT,   `title` varchar(255) NOT NULL DEFAULT \'\',   `description` mediumtext NOT NULL,   `image` varchar(255) NOT NULL,   `start_date` date DEFAULT NULL,   `end_date` date DEFAULT NULL,   `start_time` time DEFAULT NULL,   `end_time` time DEFAULT NULL,   `all_day` char(2) NOT NULL,   `recurrence_type` varchar(255) NOT NULL,   `recurrence_detail` varchar(255) NOT NULL,   `canceled_recurrences` text NOT NULL,   `recurring_end_date` date DEFAULT NULL,   `last_updated` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,   `featured` char(2) NOT NULL,   `route` varchar(255) DEFAULT NULL,   PRIMARY KEY (`id`),   KEY `start_date` (`start_date`),   KEY `end_date` (`end_date`),   KEY `recurring_end_date` (`recurring_end_date`),   KEY `recurrence_type` (`recurrence_type`),   KEY `featured` (`featured`) ) ENGINE=InnoDB DEFAULT CHARSET=utf8\"\n        }\n    },\n    \"sql_revisions\": []\n}'),
	('com.fastspot.form-builder','extension','Form Builder','2.1.1','2018-08-02 14:19:36','{\n    \"type\": \"extension\",\n    \"id\": \"com.fastspot.form-builder\",\n    \"version\": \"2.1.1\",\n    \"revision\": 30,\n    \"compatibility\": \"4.2+\",\n    \"title\": \"Form Builder\",\n    \"description\": \"An easy to use form builder allowing the administrative users to easily add fields to a form that stores entries in the database and sends out emails. Also supports paid forms.\",\n    \"keywords\": [\n        \"forms\",\n        \"emails\",\n        \"submissions\",\n        \"form\"\n    ],\n    \"author\": {\n        \"name\": \"Tim Buckingham\",\n        \"url\": \"http://www.fastspot.com\",\n        \"email\": \"tim@fastspot.com\"\n    },\n    \"licenses\": {\n        \"LGPL v3\": \"http://opensource.org/licenses/LGPL-3.0\"\n    },\n    \"components\": {\n        \"module_groups\": [],\n        \"modules\": [\n            {\n                \"id\": 2,\n                \"group\": null,\n                \"name\": \"Form Builder\",\n                \"route\": \"com.fastspot.form-builder*btx-form-builder\",\n                \"class\": \"BTXFormBuilder\",\n                \"icon\": \"form\",\n                \"gbp\": {\n                    \"name\": \"\",\n                    \"table\": \"\",\n                    \"other_table\": \"\"\n                },\n                \"position\": \"0\",\n                \"extension\": \"com.fastspot.form-builder\",\n                \"actions\": [\n                    {\n                        \"id\": \"57\",\n                        \"module\": \"13\",\n                        \"name\": \"View Forms\",\n                        \"route\": \"\",\n                        \"in_nav\": \"on\",\n                        \"form\": null,\n                        \"view\": \"19\",\n                        \"report\": null,\n                        \"class\": \"list\",\n                        \"level\": \"0\",\n                        \"position\": \"3\"\n                    },\n                    {\n                        \"id\": \"58\",\n                        \"module\": \"13\",\n                        \"name\": \"Add Form\",\n                        \"route\": \"add\",\n                        \"in_nav\": \"on\",\n                        \"form\": null,\n                        \"view\": null,\n                        \"report\": null,\n                        \"class\": \"add\",\n                        \"level\": \"0\",\n                        \"position\": \"2\"\n                    },\n                    {\n                        \"id\": \"59\",\n                        \"module\": \"13\",\n                        \"name\": \"Settings\",\n                        \"route\": \"settings\",\n                        \"in_nav\": \"on\",\n                        \"form\": null,\n                        \"view\": null,\n                        \"report\": null,\n                        \"class\": \"server\",\n                        \"level\": \"2\",\n                        \"position\": \"1\"\n                    }\n                ],\n                \"views\": [\n                    {\n                        \"id\": \"19\",\n                        \"module\": \"13\",\n                        \"title\": \"Forms\",\n                        \"description\": \"\",\n                        \"type\": \"searchable\",\n                        \"table\": \"btx_form_builder_forms\",\n                        \"fields\": {\n                            \"title\": {\n                                \"title\": \"Title\",\n                                \"parser\": \"\",\n                                \"width\": 222,\n                                \"numeric\": false\n                            },\n                            \"entries\": {\n                                \"title\": \"Entries\",\n                                \"parser\": \"\",\n                                \"width\": 222,\n                                \"numeric\": true\n                            },\n                            \"last_entry\": {\n                                \"title\": \"Last Entry\",\n                                \"parser\": \"if ($value) { $value = date(\\\"F j @ g:ia\\\",strtotime($value)); }\",\n                                \"width\": 222,\n                                \"numeric\": false\n                            }\n                        },\n                        \"options\": {\n                            \"sort_column\": \"title\",\n                            \"sort_direction\": \"ASC\",\n                            \"per_page\": \"15\",\n                            \"filter\": \"\"\n                        },\n                        \"actions\": {\n                            \"entries\": \"{\\\"name\\\":\\\"Entries\\\",\\\"class\\\":\\\"icon_view\\\",\\\"route\\\":\\\"entries\\\",\\\"function\\\":\\\"\\\"}\",\n                            \"export\": \"{\\\"name\\\":\\\"Export\\\",\\\"class\\\":\\\"icon_export\\\",\\\"route\\\":\\\"export\\\",\\\"function\\\":\\\"\\\"}\",\n                            \"edit\": \"on\",\n                            \"delete\": \"on\"\n                        },\n                        \"preview_url\": \"\",\n                        \"related_form\": null\n                    }\n                ],\n                \"forms\": [],\n                \"embed_forms\": [],\n                \"reports\": []\n            }\n        ],\n        \"templates\": [\n            {\n                \"id\": \"com.fastspot.form-builder*btx-form-builder\",\n                \"name\": \"Form Builder\",\n                \"routed\": \"on\",\n                \"resources\": [\n                    {\n                        \"id\": \"page_header\",\n                        \"title\": \"Page Header\",\n                        \"subtitle\": \"\",\n                        \"type\": \"text\",\n                        \"options\": []\n                    },\n                    {\n                        \"id\": \"page_content\",\n                        \"title\": \"Page Content\",\n                        \"subtitle\": \"\",\n                        \"type\": \"html\",\n                        \"options\": []\n                    },\n                    {\n                        \"id\": \"form\",\n                        \"title\": \"Form\",\n                        \"subtitle\": \"\",\n                        \"type\": \"com.fastspot.form-builder*form-builder-picker\",\n                        \"options\": {\n                            \"list_type\": \"db\",\n                            \"allow-empty\": \"No\",\n                            \"pop-table\": \"btx_form_builder_forms\",\n                            \"pop-description\": \"title\",\n                            \"pop-sort\": \"`title` ASC\"\n                        }\n                    },\n                    {\n                        \"id\": \"emails\",\n                        \"title\": \"Email Addresses\",\n                        \"subtitle\": \"(to send submissions notifications to \\u2014 separate with commas)\",\n                        \"type\": \"textarea\",\n                        \"options\": []\n                    },\n                    {\n                        \"id\": \"thank_you_page_header\",\n                        \"title\": \"Thank You Page Header\",\n                        \"subtitle\": \"\",\n                        \"type\": \"text\",\n                        \"options\": []\n                    },\n                    {\n                        \"id\": \"thank_you_page_content\",\n                        \"title\": \"Thank You Page Content\",\n                        \"subtitle\": \"\",\n                        \"type\": \"html\",\n                        \"options\": []\n                    }\n                ],\n                \"module\": \"0\",\n                \"level\": \"0\",\n                \"position\": \"0\",\n                \"extension\": \"com.fastspot.form-builder\"\n            }\n        ],\n        \"callouts\": [],\n        \"settings\": [],\n        \"feeds\": [],\n        \"field_types\": [\n            {\n                \"id\": \"com.fastspot.form-builder*form-builder-picker\",\n                \"name\": \"Form Builder Form\",\n                \"use_cases\": {\n                    \"templates\": \"on\",\n                    \"modules\": \"on\",\n                    \"callouts\": \"on\",\n                    \"settings\": \"on\"\n                },\n                \"self_draw\": \"on\",\n                \"extension\": \"com.fastspot.form-builder\"\n            }\n        ],\n        \"tables\": {\n            \"btx_form_builder_entries\": \"CREATE TABLE `btx_form_builder_entries` (   `id` int(11) NOT NULL AUTO_INCREMENT,   `form` int(11) NOT NULL,   `data` longtext NOT NULL,   `created_at` datetime NOT NULL DEFAULT \'0000-00-00 00:00:00\',   PRIMARY KEY (`id`),   KEY `form` (`form`),    FOREIGN KEY (`form`) REFERENCES `btx_form_builder_forms` (`id`) ON DELETE CASCADE ) ENGINE=InnoDB DEFAULT CHARSET=utf8\",\n            \"btx_form_builder_fields\": \"CREATE TABLE `btx_form_builder_fields` (   `id` int(11) NOT NULL AUTO_INCREMENT,   `form` int(11) NOT NULL,   `column` int(11) NOT NULL,   `alignment` char(5) NOT NULL,   `type` varchar(255) NOT NULL DEFAULT \'\',   `data` longtext NOT NULL,   `position` int(11) NOT NULL,   PRIMARY KEY (`id`),   KEY `form` (`form`),   KEY `column` (`column`),   KEY `position` (`position`),    FOREIGN KEY (`form`) REFERENCES `btx_form_builder_forms` (`id`) ON DELETE CASCADE ) ENGINE=InnoDB DEFAULT CHARSET=utf8\",\n            \"btx_form_builder_forms\": \"CREATE TABLE `btx_form_builder_forms` (   `id` int(11) NOT NULL AUTO_INCREMENT,   `title` varchar(255) NOT NULL DEFAULT \'\',   `paid` char(2) NOT NULL DEFAULT \'\',   `base_price` float NOT NULL,   `early_bird_base_price` float NOT NULL,   `early_bird_date` datetime DEFAULT NULL,   `total_collected` float NOT NULL,   `entries` int(11) NOT NULL,   `limit_entries` char(2) NOT NULL DEFAULT \'\',   `max_entries` int(11) NOT NULL,   `scheduling` char(2) NOT NULL,   `scheduling_open_date` datetime DEFAULT NULL,   `scheduling_close_date` datetime DEFAULT NULL,   `scheduling_before_message` longtext,   `scheduling_after_message` longtext,   `last_entry` datetime DEFAULT NULL,   PRIMARY KEY (`id`) ) ENGINE=InnoDB DEFAULT CHARSET=utf8\"\n        }\n    },\n    \"sql_revisions\": {\n        \"26\": [\n            \"ALTER TABLE `btx_form_builder_forms` ADD COLUMN `scheduling` char(2) NOT NULL AFTER `max_entries`\",\n            \"ALTER TABLE `btx_form_builder_forms` ADD COLUMN `scheduling_open_date` datetime NULL DEFAULT NULL AFTER `scheduling`\",\n            \"ALTER TABLE `btx_form_builder_forms` ADD COLUMN `scheduling_close_date` datetime NULL DEFAULT NULL AFTER `scheduling_open_date`\",\n            \"ALTER TABLE `btx_form_builder_forms` ADD COLUMN `scheduling_before_message` longtext NULL AFTER `scheduling_close_date`\",\n            \"ALTER TABLE `btx_form_builder_forms` ADD COLUMN `scheduling_after_message` longtext NULL AFTER `scheduling_before_message`\"\n        ]\n    }\n}'),
	('com.fastspot.hidden-value-field-type','extension','Hidden Value','1.0','2018-08-02 14:19:41','{\n    \"type\": \"extension\",\n    \"id\": \"com.fastspot.hidden-value-field-type\",\n    \"version\": \"1.0\",\n    \"revision\": 2,\n    \"compatibility\": \"4.2+\",\n    \"title\": \"Hidden Value\",\n    \"description\": \"A field type that implements a hidden value (not editable by the user).\",\n    \"keywords\": [\n        \"hidden\",\n        \"value\",\n        \"hidden value\"\n    ],\n    \"author\": {\n        \"name\": \"Fastspot\",\n        \"url\": \"http://www.fastspot.com\",\n        \"email\": \"tim@fastspot.com\"\n    },\n    \"licenses\": {\n        \"LGPL v3\": \"http://opensource.org/licenses/LGPL-3.0\"\n    },\n    \"components\": {\n        \"module_groups\": [],\n        \"modules\": [],\n        \"templates\": [],\n        \"callouts\": [],\n        \"settings\": [],\n        \"feeds\": [],\n        \"field_types\": [\n            {\n                \"id\": \"com.fastspot.hidden-value-field-type*hidden-value\",\n                \"name\": \"Hidden Value\",\n                \"use_cases\": {\n                    \"templates\": \"on\",\n                    \"modules\": \"on\",\n                    \"callouts\": \"on\",\n                    \"settings\": \"on\"\n                },\n                \"self_draw\": \"on\",\n                \"extension\": \"com.fastspot.hidden-value-field-type\"\n            }\n        ],\n        \"tables\": []\n    },\n    \"sql_revisions\": []\n}'),
	('com.fastspot.link-finder-field-type','extension','Link Finder','2.2','2018-08-02 14:19:48','{\n    \"type\": \"extension\",\n    \"id\": \"com.fastspot.link-finder-field-type\",\n    \"version\": \"2.2\",\n    \"revision\": 10,\n    \"compatibility\": \"4.2+\",\n    \"title\": \"Link Finder\",\n    \"description\": \"A field type that allows a user to begin typing and find links to existing pages and files on the site through a search interface.\",\n    \"keywords\": [\n        \"link finder\",\n        \"links\",\n        \"search\",\n        \"files\"\n    ],\n    \"author\": {\n        \"name\": \"Fastspot\",\n        \"url\": \"http://www.fastspot.com\",\n        \"email\": \"tim@fastspot.com\"\n    },\n    \"licenses\": {\n        \"LGPL v3\": \"http://opensource.org/licenses/LGPL-3.0\"\n    },\n    \"components\": {\n        \"module_groups\": [],\n        \"modules\": [],\n        \"templates\": [],\n        \"callouts\": [],\n        \"settings\": [],\n        \"feeds\": [],\n        \"field_types\": [\n            {\n                \"id\": \"com.fastspot.link-finder-field-type*link-finder\",\n                \"name\": \"Link Finder\",\n                \"use_cases\": {\n                    \"templates\": \"on\",\n                    \"modules\": \"on\",\n                    \"callouts\": \"on\",\n                    \"settings\": \"on\"\n                },\n                \"self_draw\": null,\n                \"extension\": \"com.fastspot.link-finder-field-type\"\n            }\n        ],\n        \"tables\": []\n    },\n    \"sql_revisions\": []\n}'),
	('com.fastspot.media-gallery-field-type','extension','Media Gallery Field Type','1.5.1','2018-08-02 14:19:55','{\n    \"type\": \"extension\",\n    \"id\": \"com.fastspot.media-gallery-field-type\",\n    \"version\": \"1.5.1\",\n    \"revision\": 14,\n    \"compatibility\": \"4.2.7+\",\n    \"title\": \"Media Gallery Field Type\",\n    \"description\": \"This extension contains a field type which allows a user to enter either photos or videos from YouTube or Vimeo. It also allows for additional fields to be added (i.e. caption, description, etc) similar to the Matrix field type.\\r\\n\\r\\nYouTube video support requires the YouTube API to be setup in BigTree.\",\n    \"keywords\": [\n        \"media\",\n        \"video\",\n        \"photo\",\n        \"gallery\"\n    ],\n    \"author\": {\n        \"name\": \"Tim Buckingham\",\n        \"url\": \"http://www.fastspot.com\",\n        \"email\": \"tim@fastspot.com\"\n    },\n    \"licenses\": {\n        \"LGPL v3\": \"http://opensource.org/licenses/LGPL-3.0\"\n    },\n    \"components\": {\n        \"module_groups\": [],\n        \"modules\": [],\n        \"templates\": [],\n        \"callouts\": [],\n        \"settings\": [],\n        \"feeds\": [],\n        \"field_types\": [\n            {\n                \"id\": \"com.fastspot.media-gallery-field-type*media-gallery\",\n                \"name\": \"Media Gallery\",\n                \"use_cases\": {\n                    \"templates\": \"on\",\n                    \"modules\": \"on\",\n                    \"callouts\": \"on\",\n                    \"settings\": \"on\"\n                },\n                \"self_draw\": null,\n                \"extension\": \"com.fastspot.media-gallery-field-type\"\n            }\n        ],\n        \"tables\": []\n    },\n    \"sql_revisions\": []\n}'),
	('com.fastspot.rawtext-field-types','extension','Raw Text Field Types','1.0','2018-08-02 14:20:01','{\n    \"type\": \"extension\",\n    \"id\": \"com.fastspot.rawtext-field-types\",\n    \"version\": \"1.0\",\n    \"revision\": 1,\n    \"compatibility\": \"4.2+\",\n    \"title\": \"Raw Text Field Types\",\n    \"description\": \"Includes two field types: &quot;Raw Text&quot; and &quot;Raw Text Area&quot;. These behave almost exactly the same as the regular Text and Text Area fields with the exception that they do not escape HTML characters (so you can place HTML into them).\",\n    \"keywords\": [\n        \"\"\n    ],\n    \"author\": {\n        \"name\": \"Tim Buckingham\",\n        \"url\": \"http://www.fastspot.com\",\n        \"email\": \"tim@fastspot.com\"\n    },\n    \"licenses\": {\n        \"LGPL v3\": \"http://opensource.org/licenses/LGPL-3.0\"\n    },\n    \"components\": {\n        \"module_groups\": [],\n        \"modules\": [],\n        \"templates\": [],\n        \"callouts\": [],\n        \"settings\": [],\n        \"feeds\": [],\n        \"field_types\": [\n            {\n                \"id\": \"com.fastspot.rawtext-field-types*raw-text\",\n                \"name\": \"Raw Text\",\n                \"use_cases\": {\n                    \"templates\": \"on\",\n                    \"modules\": \"on\",\n                    \"callouts\": \"on\",\n                    \"settings\": \"on\"\n                },\n                \"self_draw\": null,\n                \"extension\": \"com.fastspot.rawtext-field-types\"\n            },\n            {\n                \"id\": \"com.fastspot.rawtext-field-types*raw-textarea\",\n                \"name\": \"Raw Text Area\",\n                \"use_cases\": {\n                    \"templates\": \"on\",\n                    \"modules\": \"on\",\n                    \"callouts\": \"on\",\n                    \"settings\": \"on\"\n                },\n                \"self_draw\": null,\n                \"extension\": \"com.fastspot.rawtext-field-types\"\n            }\n        ],\n        \"tables\": []\n    }\n}'),
	('com.fastspot.read-only-value-field-type','extension','Read Only Value','1.0','2018-08-02 14:20:06','{\n    \"type\": \"extension\",\n    \"id\": \"com.fastspot.read-only-value-field-type\",\n    \"version\": \"1.0\",\n    \"revision\": 2,\n    \"compatibility\": \"4.2+\",\n    \"title\": \"Read Only Value\",\n    \"description\": \"A field type that implements a read-only value for display purposes but not editing.\",\n    \"keywords\": [\n        \"read only\",\n        \"read-only\",\n        \"read\",\n        \"uneditable\"\n    ],\n    \"author\": {\n        \"name\": \"Fastspot\",\n        \"url\": \"http://www.fastspot.com\",\n        \"email\": \"tim@fastspot.com\"\n    },\n    \"licenses\": {\n        \"LGPL v3\": \"http://opensource.org/licenses/LGPL-3.0\"\n    },\n    \"components\": {\n        \"module_groups\": [],\n        \"modules\": [],\n        \"templates\": [],\n        \"callouts\": [],\n        \"settings\": [],\n        \"feeds\": [],\n        \"field_types\": [\n            {\n                \"id\": \"com.fastspot.read-only-value-field-type*read-only-value\",\n                \"name\": \"Read Only Value\",\n                \"use_cases\": {\n                    \"modules\": \"on\"\n                },\n                \"self_draw\": null,\n                \"extension\": \"com.fastspot.read-only-value-field-type\"\n            }\n        ],\n        \"tables\": []\n    },\n    \"sql_revisions\": []\n}'),
	('com.fastspot.reusable-callouts','extension','Reusable Callouts','1.3.3','2018-08-02 14:20:11','{\n    \"type\": \"extension\",\n    \"id\": \"com.fastspot.reusable-callouts\",\n    \"version\": \"1.3.3\",\n    \"revision\": 18,\n    \"compatibility\": \"4.2+\",\n    \"title\": \"Reusable Callouts\",\n    \"description\": \"Implements a module that allows users to create reusable callouts and a field type allowing end users to choose a pre-created callout when adding callouts.\",\n    \"keywords\": [\n        \"callouts\",\n        \"reusable\",\n        \"modular\"\n    ],\n    \"author\": {\n        \"name\": \"Tim Buckingham\",\n        \"url\": \"http://www.fastspot.com\",\n        \"email\": \"tim@fastspot.com\"\n    },\n    \"licenses\": {\n        \"LGPL v3\": \"http://opensource.org/licenses/LGPL-3.0\"\n    },\n    \"components\": {\n        \"module_groups\": [],\n        \"modules\": [\n            {\n                \"id\": 3,\n                \"group\": null,\n                \"name\": \"Reusable Callouts\",\n                \"route\": \"com.fastspot.reusable-callouts*reusable-callouts\",\n                \"class\": \"BTXReusableCallouts\",\n                \"icon\": \"gear\",\n                \"gbp\": {\n                    \"name\": \"\",\n                    \"table\": \"\",\n                    \"item_parser\": \"\",\n                    \"other_table\": \"\"\n                },\n                \"position\": \"0\",\n                \"extension\": \"com.fastspot.reusable-callouts\",\n                \"actions\": [\n                    {\n                        \"id\": \"27\",\n                        \"module\": \"6\",\n                        \"name\": \"View Reusable Callouts\",\n                        \"route\": \"\",\n                        \"in_nav\": \"on\",\n                        \"form\": null,\n                        \"view\": \"9\",\n                        \"report\": null,\n                        \"class\": \"list\",\n                        \"level\": \"0\",\n                        \"position\": \"0\"\n                    },\n                    {\n                        \"id\": \"28\",\n                        \"module\": \"6\",\n                        \"name\": \"Add Callout\",\n                        \"route\": \"add\",\n                        \"in_nav\": \"on\",\n                        \"form\": null,\n                        \"view\": null,\n                        \"report\": null,\n                        \"class\": \"add\",\n                        \"level\": \"0\",\n                        \"position\": \"0\"\n                    },\n                    {\n                        \"id\": \"29\",\n                        \"module\": \"6\",\n                        \"name\": \"Edit Callout\",\n                        \"route\": \"edit\",\n                        \"in_nav\": \"\",\n                        \"form\": null,\n                        \"view\": null,\n                        \"report\": null,\n                        \"class\": \"edit\",\n                        \"level\": \"0\",\n                        \"position\": \"0\"\n                    }\n                ],\n                \"views\": [\n                    {\n                        \"id\": \"9\",\n                        \"module\": \"6\",\n                        \"title\": \"Reusable Callouts\",\n                        \"description\": \"\",\n                        \"type\": \"grouped\",\n                        \"table\": \"btx_reusable_callouts\",\n                        \"fields\": {\n                            \"title\": {\n                                \"width\": \"708\",\n                                \"title\": \"Title\",\n                                \"parser\": \"\",\n                                \"numeric\": false\n                            }\n                        },\n                        \"options\": {\n                            \"filter\": \"\",\n                            \"group_field\": \"type\",\n                            \"sort\": \"`id` DESC\",\n                            \"other_table\": \"bigtree_callouts\",\n                            \"title_field\": \"name\",\n                            \"ot_sort_field\": \"name\",\n                            \"ot_sort_direction\": \"ASC\",\n                            \"group_parser\": \"\"\n                        },\n                        \"actions\": {\n                            \"report\": \"{\\\"name\\\":\\\"Report\\\",\\\"class\\\":\\\"icon_view\\\",\\\"route\\\":\\\"report\\\",\\\"function\\\":\\\"\\\"}\",\n                            \"archive\": \"on\",\n                            \"edit\": \"on\",\n                            \"delete\": \"on\"\n                        },\n                        \"preview_url\": \"\",\n                        \"related_form\": null\n                    }\n                ],\n                \"forms\": [],\n                \"embed_forms\": [],\n                \"reports\": []\n            }\n        ],\n        \"templates\": [],\n        \"callouts\": [],\n        \"settings\": [],\n        \"feeds\": [],\n        \"field_types\": [\n            {\n                \"id\": \"com.fastspot.reusable-callouts*callout-list\",\n                \"name\": \"Reusable Callout List\",\n                \"use_cases\": {\n                    \"callouts\": \"on\"\n                },\n                \"self_draw\": \"on\",\n                \"extension\": \"com.fastspot.reusable-callouts\"\n            }\n        ],\n        \"tables\": {\n            \"btx_reusable_callouts\": \"CREATE TABLE `btx_reusable_callouts` (   `id` int(11) unsigned NOT NULL AUTO_INCREMENT,   `type` varchar(255) DEFAULT NULL,   `title` varchar(255) DEFAULT NULL,   `data` longtext,   `archived` char(2) NOT NULL DEFAULT \'\',   PRIMARY KEY (`id`) ) ENGINE=InnoDB DEFAULT CHARSET=utf8\"\n        }\n    },\n    \"sql_revisions\": {\n        \"6\": [\n            \"ALTER TABLE `btx_reusable_callouts` MODIFY COLUMN `data` longtext NULL AFTER `title`\"\n        ],\n        \"9\": [\n            \"ALTER TABLE `btx_reusable_callouts` ADD COLUMN `archived` char(2) NOT NULL DEFAULT \'\' AFTER `data`\"\n        ]\n    }\n}'),
	('com.fastspot.video-field-type','extension','Video Field','1.3.4','2018-08-02 14:20:15','{\n    \"type\": \"extension\",\n    \"id\": \"com.fastspot.video-field-type\",\n    \"version\": \"1.3.4\",\n    \"revision\": 7,\n    \"compatibility\": \"4.2+\",\n    \"title\": \"Video Field\",\n    \"description\": \"A field type that allows a user to input a YouTube or Vimeo URL. The field will grab the video\'s thumbnail image and allow you to create thumbnails and crops as well as storing the service type, video ID, URL, and embed code.\\r\\n\\r\\nVersion 1.1 supports the YouTube v3 API. The v2 API which allowed non-authenticated calls has been turned off.\",\n    \"keywords\": [\n        \"video\",\n        \"youtube\",\n        \"vimeo\"\n    ],\n    \"author\": {\n        \"name\": \"Fastspot\",\n        \"url\": \"http://www.fastspot.com\",\n        \"email\": \"tim@fastspot.com\"\n    },\n    \"licenses\": {\n        \"LGPL v3\": \"http://opensource.org/licenses/LGPL-3.0\"\n    },\n    \"components\": {\n        \"module_groups\": [],\n        \"modules\": [],\n        \"templates\": [],\n        \"callouts\": [],\n        \"settings\": [],\n        \"feeds\": [],\n        \"field_types\": [\n            {\n                \"id\": \"com.fastspot.video-field-type*video\",\n                \"name\": \"Video\",\n                \"use_cases\": {\n                    \"templates\": \"on\",\n                    \"modules\": \"on\",\n                    \"callouts\": \"on\",\n                    \"settings\": \"on\"\n                },\n                \"self_draw\": null,\n                \"extension\": \"com.fastspot.video-field-type\"\n            }\n        ],\n        \"tables\": []\n    },\n    \"sql_revisions\": []\n}');

/*!40000 ALTER TABLE `bigtree_extensions` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table bigtree_feeds
# ------------------------------------------------------------

DROP TABLE IF EXISTS `bigtree_feeds`;

CREATE TABLE `bigtree_feeds` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `route` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `type` varchar(255) NOT NULL,
  `table` varchar(255) NOT NULL,
  `fields` text NOT NULL,
  `settings` text NOT NULL,
  `extension` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `route` (`route`),
  KEY `extension` (`extension`),
  CONSTRAINT `bigtree_feeds_ibfk_1` FOREIGN KEY (`extension`) REFERENCES `bigtree_extensions` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table bigtree_field_types
# ------------------------------------------------------------

DROP TABLE IF EXISTS `bigtree_field_types`;

CREATE TABLE `bigtree_field_types` (
  `id` varchar(255) NOT NULL DEFAULT '',
  `name` varchar(255) NOT NULL,
  `use_cases` text NOT NULL,
  `self_draw` char(2) DEFAULT NULL,
  `extension` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `extension` (`extension`),
  CONSTRAINT `bigtree_field_types_ibfk_1` FOREIGN KEY (`extension`) REFERENCES `bigtree_extensions` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `bigtree_field_types` WRITE;
/*!40000 ALTER TABLE `bigtree_field_types` DISABLE KEYS */;

INSERT INTO `bigtree_field_types` (`id`, `name`, `use_cases`, `self_draw`, `extension`)
VALUES
	('com.fastspot.advanced-callouts*inline-callout-set','Inline Callout Set','{\"templates\":\"on\",\"modules\":\"on\",\"settings\":\"on\"}','on','com.fastspot.advanced-callouts'),
	('com.fastspot.advanced-callouts*predefined-callouts','Predefined Callouts','{\"templates\":\"on\",\"modules\":\"on\",\"settings\":\"on\"}','on','com.fastspot.advanced-callouts'),
	('com.fastspot.date-range*date-range','Date Range','{\"templates\":\"on\",\"modules\":\"on\",\"callouts\":\"on\",\"settings\":\"on\"}',NULL,'com.fastspot.date-range'),
	('com.fastspot.events*date-chooser','Events — Date Chooser','{\"modules\":\"on\"}','on','com.fastspot.events'),
	('com.fastspot.form-builder*form-builder-picker','Form Builder Form','{\"templates\":\"on\",\"modules\":\"on\",\"callouts\":\"on\",\"settings\":\"on\"}','on','com.fastspot.form-builder'),
	('com.fastspot.hidden-value-field-type*hidden-value','Hidden Value','{\"templates\":\"on\",\"modules\":\"on\",\"callouts\":\"on\",\"settings\":\"on\"}','on','com.fastspot.hidden-value-field-type'),
	('com.fastspot.link-finder-field-type*link-finder','Link Finder','{\"templates\":\"on\",\"modules\":\"on\",\"callouts\":\"on\",\"settings\":\"on\"}',NULL,'com.fastspot.link-finder-field-type'),
	('com.fastspot.media-gallery-field-type*media-gallery','Media Gallery','{\"templates\":\"on\",\"modules\":\"on\",\"callouts\":\"on\",\"settings\":\"on\"}',NULL,'com.fastspot.media-gallery-field-type'),
	('com.fastspot.rawtext-field-types*raw-text','Raw Text','{\"templates\":\"on\",\"modules\":\"on\",\"callouts\":\"on\",\"settings\":\"on\"}',NULL,'com.fastspot.rawtext-field-types'),
	('com.fastspot.rawtext-field-types*raw-textarea','Raw Text Area','{\"templates\":\"on\",\"modules\":\"on\",\"callouts\":\"on\",\"settings\":\"on\"}',NULL,'com.fastspot.rawtext-field-types'),
	('com.fastspot.read-only-value-field-type*read-only-value','Read Only Value','{\"modules\":\"on\"}',NULL,'com.fastspot.read-only-value-field-type'),
	('com.fastspot.reusable-callouts*callout-list','Reusable Callout List','{\"callouts\":\"on\"}','on','com.fastspot.reusable-callouts'),
	('com.fastspot.video-field-type*video','Video','{\"templates\":\"on\",\"modules\":\"on\",\"callouts\":\"on\",\"settings\":\"on\"}',NULL,'com.fastspot.video-field-type');

/*!40000 ALTER TABLE `bigtree_field_types` ENABLE KEYS */;
UNLOCK TABLES;


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



# Dump of table bigtree_module_actions
# ------------------------------------------------------------

DROP TABLE IF EXISTS `bigtree_module_actions`;

CREATE TABLE `bigtree_module_actions` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `module` int(11) unsigned NOT NULL DEFAULT '0',
  `name` varchar(255) NOT NULL DEFAULT '',
  `route` varchar(255) NOT NULL DEFAULT '',
  `in_nav` char(2) NOT NULL DEFAULT '',
  `form` int(11) unsigned DEFAULT NULL,
  `view` int(11) unsigned DEFAULT NULL,
  `report` int(11) unsigned DEFAULT NULL,
  `class` varchar(255) NOT NULL,
  `level` int(11) NOT NULL,
  `position` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `module` (`module`),
  KEY `route` (`route`),
  KEY `in_nav` (`in_nav`),
  KEY `position` (`position`),
  CONSTRAINT `bigtree_module_actions_ibfk_1` FOREIGN KEY (`module`) REFERENCES `bigtree_modules` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `bigtree_module_actions` WRITE;
/*!40000 ALTER TABLE `bigtree_module_actions` DISABLE KEYS */;

INSERT INTO `bigtree_module_actions` (`id`, `module`, `name`, `route`, `in_nav`, `form`, `view`, `report`, `class`, `level`, `position`)
VALUES
	(1,1,'View Events','','on',NULL,2,NULL,'list',0,6),
	(2,1,'Search','search','on',NULL,NULL,NULL,'search2',0,5),
	(3,1,'Calendar','calendar','on',NULL,NULL,NULL,'calendar2',0,4),
	(4,1,'Add Event','add','on',2,NULL,NULL,'add',0,3),
	(5,1,'View Categories','categories','on',NULL,1,NULL,'category',0,2),
	(6,1,'Add Category','add-category','on',1,NULL,NULL,'add',0,1),
	(7,1,'Edit Event','edit','',2,NULL,NULL,'edit',0,0),
	(8,1,'Edit Category','edit-category','',1,NULL,NULL,'edit',0,0),
	(9,2,'View Forms','','on',NULL,3,NULL,'list',0,3),
	(10,2,'Add Form','add','on',NULL,NULL,NULL,'add',0,2),
	(11,2,'Settings','settings','on',NULL,NULL,NULL,'server',2,1),
	(12,3,'View Reusable Callouts','','on',NULL,4,NULL,'list',0,0),
	(13,3,'Add Callout','add','on',NULL,NULL,NULL,'add',0,0),
	(14,3,'Edit Callout','edit','',NULL,NULL,NULL,'edit',0,0),
	(15,4,'View Alerts','','on',NULL,5,NULL,'list',0,1),
	(16,4,'Add Alert','add','on',3,NULL,NULL,'add',0,0),
	(17,4,'Edit Alert','edit','',3,NULL,NULL,'edit',0,0),
	(18,5,'Add News','add','on',4,NULL,NULL,'add',0,0),
	(19,5,'Edit News','edit','',4,NULL,NULL,'edit',0,0),
	(20,5,'View News','','on',NULL,6,NULL,'list',0,1),
	(21,6,'Add Category','add','on',5,NULL,NULL,'add',0,0),
	(22,6,'Edit Category','edit','',5,NULL,NULL,'edit',0,0),
	(23,6,'View Categories','','on',NULL,7,NULL,'list',0,1);

/*!40000 ALTER TABLE `bigtree_module_actions` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table bigtree_module_embeds
# ------------------------------------------------------------

DROP TABLE IF EXISTS `bigtree_module_embeds`;

CREATE TABLE `bigtree_module_embeds` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `module` int(11) unsigned NOT NULL,
  `title` varchar(255) NOT NULL,
  `table` varchar(255) NOT NULL,
  `fields` text NOT NULL,
  `default_position` varchar(255) NOT NULL,
  `default_pending` char(2) NOT NULL,
  `css` varchar(255) NOT NULL,
  `hash` varchar(255) NOT NULL DEFAULT '',
  `redirect_url` varchar(255) NOT NULL DEFAULT '',
  `thank_you_message` text NOT NULL,
  `hooks` text,
  PRIMARY KEY (`id`),
  KEY `module` (`module`),
  CONSTRAINT `bigtree_module_embeds_ibfk_1` FOREIGN KEY (`module`) REFERENCES `bigtree_modules` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table bigtree_module_forms
# ------------------------------------------------------------

DROP TABLE IF EXISTS `bigtree_module_forms`;

CREATE TABLE `bigtree_module_forms` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `module` int(11) unsigned DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  `table` varchar(255) NOT NULL,
  `fields` text NOT NULL,
  `default_position` varchar(255) NOT NULL,
  `return_view` int(11) unsigned DEFAULT NULL,
  `return_url` varchar(255) NOT NULL,
  `open_graph` char(2) NOT NULL,
  `tagging` char(2) NOT NULL,
  `hooks` text,
  PRIMARY KEY (`id`),
  KEY `return_view` (`return_view`),
  KEY `module` (`module`),
  CONSTRAINT `bigtree_module_forms_ibfk_1` FOREIGN KEY (`return_view`) REFERENCES `bigtree_module_views` (`id`) ON DELETE SET NULL,
  CONSTRAINT `bigtree_module_forms_ibfk_2` FOREIGN KEY (`module`) REFERENCES `bigtree_modules` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `bigtree_module_forms` WRITE;
/*!40000 ALTER TABLE `bigtree_module_forms` DISABLE KEYS */;

INSERT INTO `bigtree_module_forms` (`id`, `module`, `title`, `table`, `fields`, `default_position`, `return_view`, `return_url`, `open_graph`, `tagging`, `hooks`)
VALUES
	(1,1,'Category','btx_events_categories','[\n    {\n        \"title\": \"Name\",\n        \"subtitle\": \"\",\n        \"type\": \"text\",\n        \"settings\": {\n            \"column\": \"name\"\n        },\n        \"column\": \"name\"\n    },\n    {\n        \"title\": \"Route\",\n        \"subtitle\": \"\",\n        \"type\": \"route\",\n        \"settings\": {\n            \"source\": \"name\",\n            \"column\": \"route\"\n        },\n        \"column\": \"route\"\n    }\n]','Bottom',1,'','','','{\n    \"pre\": \"\",\n    \"post\": \"\",\n    \"publish\": \"\"\n}'),
	(2,1,'Event','btx_events_events','[\n    {\n        \"title\": \"Title\",\n        \"subtitle\": \"\",\n        \"type\": \"text\",\n        \"settings\": {\n            \"validation\": \"required\",\n            \"sub_type\": \"\",\n            \"max_length\": \"\"\n        },\n        \"column\": \"title\"\n    },\n    {\n        \"title\": \"Blurb\",\n        \"subtitle\": \"(shows in list view, defaults to first 250 characters of Content)\",\n        \"type\": \"textarea\",\n        \"settings\": null,\n        \"column\": \"blurb\"\n    },\n    {\n        \"title\": \"Content\",\n        \"subtitle\": \"\",\n        \"type\": \"html\",\n        \"settings\": null,\n        \"column\": \"content\"\n    },\n    {\n        \"title\": \"Image\",\n        \"subtitle\": \"(min 980x552)\",\n        \"type\": \"upload\",\n        \"settings\": {\n            \"directory\": \"files/events/\",\n            \"image\": \"on\",\n            \"min_width\": \"980\",\n            \"min_height\": \"552\",\n            \"preview_prefix\": \"classic-xsml-\",\n            \"crops\": [\n                {\n                    \"prefix\": \"wide-med-\",\n                    \"width\": \"980\",\n                    \"height\": \"552\",\n                    \"grayscale\": \"\",\n                    \"thumbs\": [\n                        null,\n                        {\n                            \"prefix\": \"wide-xsml-\",\n                            \"width\": \"500\",\n                            \"height\": \"\",\n                            \"grayscale\": \"\"\n                        },\n                        {\n                            \"prefix\": \"wide-sml-\",\n                            \"width\": \"740\",\n                            \"height\": \"\",\n                            \"grayscale\": \"\"\n                        }\n                    ]\n                },\n                {\n                    \"prefix\": \"classic-sml-\",\n                    \"width\": \"740\",\n                    \"height\": \"494\",\n                    \"grayscale\": \"\",\n                    \"thumbs\": [\n                        null,\n                        null,\n                        null,\n                        {\n                            \"prefix\": \"classic-xsml-\",\n                            \"width\": \"500\",\n                            \"height\": \"\",\n                            \"grayscale\": \"\"\n                        }\n                    ]\n                }\n            ],\n            \"thumbs\": [\n                {\n                    \"prefix\": \"\",\n                    \"width\": \"1440\",\n                    \"height\": \"1440\",\n                    \"grayscale\": \"\"\n                }\n            ]\n        },\n        \"column\": \"image\"\n    },\n    {\n        \"title\": \"Location\",\n        \"subtitle\": \"\",\n        \"type\": \"text\",\n        \"settings\": null,\n        \"column\": \"location\"\n    },\n    {\n        \"title\": \"Link\",\n        \"subtitle\": \"(overrides detail page, include http://)\",\n        \"type\": \"com.fastspot.link-finder-field-type*link-finder\",\n        \"settings\": null,\n        \"column\": \"link\"\n    },\n    {\n        \"title\": \"Categories\",\n        \"subtitle\": \"\",\n        \"type\": \"many-to-many\",\n        \"settings\": {\n            \"mtm-connecting-table\": \"btx_events_event_categories\",\n            \"mtm-my-id\": \"event\",\n            \"mtm-other-id\": \"category\",\n            \"mtm-other-table\": \"btx_events_categories\",\n            \"mtm-other-descriptor\": \"name\",\n            \"mtm-sort\": \"`name` ASC\",\n            \"mtm-list-parser\": \"BTXEvents::parseMTM\",\n            \"column\": \"__mtm-1__\"\n        },\n        \"column\": \"__mtm-1__\"\n    },\n    {\n        \"title\": \"Date Chooser\",\n        \"subtitle\": \"\",\n        \"type\": \"com.fastspot.events*date-chooser\",\n        \"settings\": {\n            \"function\": \"BTXEvents::drawFormDateTime\",\n            \"process_function\": \"BTXEvents::parseFormDateTime\",\n            \"column\": \"all_day\"\n        },\n        \"column\": \"all_day\"\n    },\n    {\n        \"title\": \"Route\",\n        \"subtitle\": \"\",\n        \"type\": \"route\",\n        \"settings\": {\n            \"source\": \"title\",\n            \"column\": \"route\"\n        },\n        \"column\": \"route\"\n    },\n    {\n        \"title\": \"In Content Callouts\",\n        \"subtitle\": \"\",\n        \"type\": \"callouts\",\n        \"settings\": {\n            \"groups\": [\n                \"2\"\n            ],\n            \"noun\": \"\",\n            \"max\": \"\"\n        },\n        \"column\": \"in_content_callouts\"\n    },\n    {\n        \"title\": \"Full Width Callouts\",\n        \"subtitle\": \"\",\n        \"type\": \"callouts\",\n        \"settings\": {\n            \"groups\": [\n                \"1\"\n            ],\n            \"noun\": \"\",\n            \"max\": \"\"\n        },\n        \"column\": \"full_width_callouts\"\n    }\n]','',2,'','','','{\n    \"pre\": \"\",\n    \"post\": \"\",\n    \"publish\": \"BTXEvents::publishHook\"\n}'),
	(3,4,'Alert','btx_alerts','[\n    {\n        \"title\": \"Title\",\n        \"subtitle\": \"\",\n        \"type\": \"text\",\n        \"settings\": {\n            \"validation\": \"required\",\n            \"sub_type\": \"\",\n            \"max_length\": \"\"\n        },\n        \"column\": \"title\"\n    },\n    {\n        \"title\": \"Description\",\n        \"subtitle\": \"(only line breaks, strong, italic, and links will show)\",\n        \"type\": \"html\",\n        \"settings\": {\n            \"validation\": \"required\",\n            \"simple\": \"on\",\n            \"simple_by_permission\": \"0\"\n        },\n        \"column\": \"description\"\n    },\n    {\n        \"title\": \"Link\",\n        \"subtitle\": \"(include http://)\",\n        \"type\": \"com.fastspot.link-finder-field-type*link-finder\",\n        \"settings\": null,\n        \"column\": \"link\"\n    },\n    {\n        \"title\": \"Internal Notes\",\n        \"subtitle\": \"(not displayed on the site)\",\n        \"type\": \"textarea\",\n        \"settings\": {\n            \"column\": \"internal_notes\"\n        },\n        \"column\": \"internal_notes\"\n    },\n    {\n        \"title\": \"Start Date\",\n        \"subtitle\": \"(optional)\",\n        \"type\": \"datetime\",\n        \"settings\": {\n            \"column\": \"start_date\"\n        },\n        \"column\": \"start_date\"\n    },\n    {\n        \"title\": \"End Date\",\n        \"subtitle\": \"(optional)\",\n        \"type\": \"datetime\",\n        \"settings\": {\n            \"column\": \"end_date\"\n        },\n        \"column\": \"end_date\"\n    }\n]','',NULL,'','','','[]'),
	(4,5,'News','btx_news','[\n    {\n        \"title\": \"Date\",\n        \"subtitle\": \"\",\n        \"type\": \"date\",\n        \"settings\": {\n            \"validation\": \"required\",\n            \"default_today\": \"on\"\n        },\n        \"column\": \"date\"\n    },\n    {\n        \"title\": \"Title\",\n        \"subtitle\": \"\",\n        \"type\": \"text\",\n        \"settings\": {\n            \"validation\": \"required\",\n            \"sub_type\": \"\",\n            \"max_length\": \"\"\n        },\n        \"column\": \"title\"\n    },\n    {\n        \"title\": \"Blurb\",\n        \"subtitle\": \"\",\n        \"type\": \"textarea\",\n        \"settings\": null,\n        \"column\": \"blurb\"\n    },\n    {\n        \"title\": \"Content\",\n        \"subtitle\": \"\",\n        \"type\": \"html\",\n        \"settings\": {\n            \"validation\": \"required\",\n            \"simple_by_permission\": \"0\"\n        },\n        \"column\": \"content\"\n    },\n    {\n        \"title\": \"Image\",\n        \"subtitle\": \"(min 980x552)\",\n        \"type\": \"upload\",\n        \"settings\": {\n            \"validation\": \"required\",\n            \"directory\": \"files/news/\",\n            \"image\": \"on\",\n            \"min_width\": \"980\",\n            \"min_height\": \"552\",\n            \"preview_prefix\": \"classic-xsml-\",\n            \"crops\": [\n                {\n                    \"prefix\": \"wide-med-\",\n                    \"width\": \"980\",\n                    \"height\": \"552\",\n                    \"grayscale\": \"\",\n                    \"thumbs\": [\n                        null,\n                        {\n                            \"prefix\": \"wide-xsml-\",\n                            \"width\": \"500\",\n                            \"height\": \"\",\n                            \"grayscale\": \"\"\n                        },\n                        {\n                            \"prefix\": \"wide-sml-\",\n                            \"width\": \"740\",\n                            \"height\": \"\",\n                            \"grayscale\": \"\"\n                        }\n                    ]\n                },\n                {\n                    \"prefix\": \"classic-sml-\",\n                    \"width\": \"740\",\n                    \"height\": \"494\",\n                    \"grayscale\": \"\",\n                    \"thumbs\": [\n                        null,\n                        null,\n                        null,\n                        {\n                            \"prefix\": \"classic-xsml-\",\n                            \"width\": \"500\",\n                            \"height\": \"\",\n                            \"grayscale\": \"\"\n                        }\n                    ]\n                }\n            ],\n            \"thumbs\": [\n                {\n                    \"prefix\": \"\",\n                    \"width\": \"1440\",\n                    \"height\": \"1440\",\n                    \"grayscale\": \"\"\n                }\n            ]\n        },\n        \"column\": \"image\"\n    },\n    {\n        \"title\": \"Link\",\n        \"subtitle\": \"(overrides detail page, include http://)\",\n        \"type\": \"com.fastspot.link-finder-field-type*link-finder\",\n        \"settings\": null,\n        \"column\": \"external_link\"\n    },\n    {\n        \"title\": \"Categories\",\n        \"subtitle\": \"\",\n        \"type\": \"many-to-many\",\n        \"settings\": {\n            \"mtm-connecting-table\": \"btx_news_categories_rel\",\n            \"mtm-my-id\": \"news\",\n            \"mtm-other-id\": \"category\",\n            \"mtm-other-table\": \"btx_news_categories\",\n            \"mtm-other-descriptor\": \"title\",\n            \"mtm-sort\": \"`title` ASC\",\n            \"mtm-list-parser\": \"\",\n            \"max\": \"\"\n        },\n        \"column\": \"__mtm-1__\"\n    },\n    {\n        \"title\": \"In Content Callouts\",\n        \"subtitle\": \"\",\n        \"type\": \"callouts\",\n        \"settings\": {\n            \"groups\": [\n                \"2\"\n            ],\n            \"noun\": \"\",\n            \"max\": \"\"\n        },\n        \"column\": \"in_content_callouts\"\n    },\n    {\n        \"title\": \"Full Width Callouts\",\n        \"subtitle\": \"\",\n        \"type\": \"callouts\",\n        \"settings\": {\n            \"groups\": [\n                \"1\"\n            ],\n            \"noun\": \"\",\n            \"max\": \"\"\n        },\n        \"column\": \"full_width_callouts\"\n    },\n    {\n        \"title\": \"Route\",\n        \"subtitle\": \"\",\n        \"type\": \"route\",\n        \"settings\": {\n            \"source\": [\n                \"title\"\n            ]\n        },\n        \"column\": \"route\"\n    }\n]','',NULL,'','on','','[]'),
	(5,6,'Category','btx_news_categories','[\n    {\n        \"title\": \"Title\",\n        \"subtitle\": \"\",\n        \"type\": \"text\",\n        \"settings\": null,\n        \"column\": \"title\"\n    },\n    {\n        \"title\": \"Hide from Display\",\n        \"subtitle\": \"(for internal categorization)\",\n        \"type\": \"checkbox\",\n        \"settings\": null,\n        \"column\": \"hidden\"\n    },\n    {\n        \"title\": \"Route\",\n        \"subtitle\": \"\",\n        \"type\": \"route\",\n        \"settings\": {\n            \"source\": [\n                \"title\"\n            ]\n        },\n        \"column\": \"route\"\n    }\n]','Bottom',NULL,'','','','[]');

/*!40000 ALTER TABLE `bigtree_module_forms` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table bigtree_module_groups
# ------------------------------------------------------------

DROP TABLE IF EXISTS `bigtree_module_groups`;

CREATE TABLE `bigtree_module_groups` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `route` varchar(255) NOT NULL,
  `position` int(11) NOT NULL DEFAULT '0',
  `extension` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `route` (`route`),
  KEY `position` (`position`),
  KEY `extension` (`extension`),
  CONSTRAINT `bigtree_module_groups_ibfk_1` FOREIGN KEY (`extension`) REFERENCES `bigtree_extensions` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `bigtree_module_groups` WRITE;
/*!40000 ALTER TABLE `bigtree_module_groups` DISABLE KEYS */;

INSERT INTO `bigtree_module_groups` (`id`, `name`, `route`, `position`, `extension`)
VALUES
	(1,'News','news',0,NULL);

/*!40000 ALTER TABLE `bigtree_module_groups` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table bigtree_module_reports
# ------------------------------------------------------------

DROP TABLE IF EXISTS `bigtree_module_reports`;

CREATE TABLE `bigtree_module_reports` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `module` int(11) unsigned DEFAULT NULL,
  `title` varchar(255) NOT NULL DEFAULT '',
  `table` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `filters` text NOT NULL,
  `fields` text NOT NULL,
  `parser` varchar(255) NOT NULL DEFAULT '',
  `view` int(11) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `view` (`view`),
  KEY `module` (`module`),
  CONSTRAINT `bigtree_module_reports_ibfk_1` FOREIGN KEY (`module`) REFERENCES `bigtree_modules` (`id`) ON DELETE CASCADE,
  CONSTRAINT `bigtree_module_reports_ibfk_2` FOREIGN KEY (`view`) REFERENCES `bigtree_module_views` (`id`) ON DELETE SET NULL
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



# Dump of table bigtree_module_views
# ------------------------------------------------------------

DROP TABLE IF EXISTS `bigtree_module_views`;

CREATE TABLE `bigtree_module_views` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `module` int(11) unsigned DEFAULT NULL,
  `title` varchar(255) NOT NULL DEFAULT '',
  `description` text NOT NULL,
  `type` varchar(255) NOT NULL DEFAULT '',
  `table` varchar(255) NOT NULL DEFAULT '',
  `fields` text NOT NULL,
  `settings` text NOT NULL,
  `actions` text NOT NULL,
  `preview_url` varchar(255) NOT NULL,
  `related_form` int(11) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `module` (`module`),
  KEY `related_form` (`related_form`),
  CONSTRAINT `bigtree_module_views_ibfk_1` FOREIGN KEY (`module`) REFERENCES `bigtree_modules` (`id`) ON DELETE CASCADE,
  CONSTRAINT `bigtree_module_views_ibfk_2` FOREIGN KEY (`related_form`) REFERENCES `bigtree_module_forms` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `bigtree_module_views` WRITE;
/*!40000 ALTER TABLE `bigtree_module_views` DISABLE KEYS */;

INSERT INTO `bigtree_module_views` (`id`, `module`, `title`, `description`, `type`, `table`, `fields`, `settings`, `actions`, `preview_url`, `related_form`)
VALUES
	(1,1,'Categories','','draggable','btx_events_categories','{\n    \"name\": {\n        \"width\": \"788\",\n        \"title\": \"Name\",\n        \"parser\": \"\",\n        \"numeric\": false\n    }\n}','{\n    \"nesting_column\": \"parent\",\n    \"filter\": \"\"\n}','{\n    \"edit\": \"on\",\n    \"delete\": \"on\"\n}','',NULL),
	(2,1,'Events','','searchable','btx_events_events','{\n    \"start_date\": {\n        \"title\": \"Start Date\",\n        \"parser\": \"\",\n        \"width\": \"98\",\n        \"numeric\": false\n    },\n    \"title\": {\n        \"title\": \"Title\",\n        \"parser\": \"\",\n        \"width\": \"521\",\n        \"numeric\": false\n    },\n    \"recurrence_type\": {\n        \"title\": \"Recurring\",\n        \"parser\": \"\",\n        \"width\": \"89\",\n        \"numeric\": false\n    }\n}','{\n    \"sort_column\": \"start_date\",\n    \"sort_direction\": \"DESC\",\n    \"per_page\": \"15\",\n    \"filter\": \"\"\n}','{\n    \"feature\": \"on\",\n    \"edit\": \"on\",\n    \"delete\": \"on\"\n}','',NULL),
	(3,2,'Forms','','searchable','btx_form_builder_forms','{\n    \"title\": {\n        \"title\": \"Title\",\n        \"parser\": \"\",\n        \"width\": 222,\n        \"numeric\": false\n    },\n    \"entries\": {\n        \"title\": \"Entries\",\n        \"parser\": \"\",\n        \"width\": 222,\n        \"numeric\": true\n    },\n    \"last_entry\": {\n        \"title\": \"Last Entry\",\n        \"parser\": \"if ($value) { $value = date(\\\"F j @ g:ia\\\",strtotime($value)); }\",\n        \"width\": 222,\n        \"numeric\": false\n    }\n}','{\n    \"sort_column\": \"title\",\n    \"sort_direction\": \"ASC\",\n    \"per_page\": \"15\",\n    \"filter\": \"\"\n}','{\n    \"entries\": \"{\\\"name\\\":\\\"Entries\\\",\\\"class\\\":\\\"icon_view\\\",\\\"route\\\":\\\"entries\\\",\\\"function\\\":\\\"\\\"}\",\n    \"export\": \"{\\\"name\\\":\\\"Export\\\",\\\"class\\\":\\\"icon_export\\\",\\\"route\\\":\\\"export\\\",\\\"function\\\":\\\"\\\"}\",\n    \"edit\": \"on\",\n    \"delete\": \"on\"\n}','',NULL),
	(4,3,'Reusable Callouts','','grouped','btx_reusable_callouts','{\n    \"title\": {\n        \"width\": \"708\",\n        \"title\": \"Title\",\n        \"parser\": \"\",\n        \"numeric\": false\n    }\n}','{\n    \"filter\": \"\",\n    \"group_field\": \"type\",\n    \"sort\": \"`id` DESC\",\n    \"other_table\": \"bigtree_callouts\",\n    \"title_field\": \"name\",\n    \"ot_sort_field\": \"name\",\n    \"ot_sort_direction\": \"ASC\",\n    \"group_parser\": \"\"\n}','{\n    \"report\": \"{\\\"name\\\":\\\"Report\\\",\\\"class\\\":\\\"icon_view\\\",\\\"route\\\":\\\"report\\\",\\\"function\\\":\\\"\\\"}\",\n    \"archive\": \"on\",\n    \"edit\": \"on\",\n    \"delete\": \"on\"\n}','',NULL),
	(5,4,'Alerts','','grouped','btx_alerts','{\n    \"title\": {\n        \"title\": \"Title\",\n        \"parser\": \"\",\n        \"width\": 364,\n        \"numeric\": false\n    },\n    \"internal_notes\": {\n        \"title\": \"Internal Notes\",\n        \"parser\": \"\",\n        \"width\": 364,\n        \"numeric\": false\n    }\n}','{\n    \"filter\": \"\",\n    \"group_field\": \"archived\",\n    \"sort\": \"`id` DESC\",\n    \"other_table\": \"\",\n    \"ot_sort_direction\": \"ASC\",\n    \"group_parser\": \"if ($item[\\\"archived\\\"]) {\\r\\n   $value = \\\"Archived\\\";\\r\\n} else {\\r\\n   $value = \\\"Active\\\";\\r\\n}\"\n}','{\n    \"archive\": \"on\",\n    \"edit\": \"on\",\n    \"delete\": \"on\"\n}','',NULL),
	(6,5,'News','','searchable','btx_news','{\n    \"date\": {\n        \"title\": \"Date\",\n        \"parser\": \"\",\n        \"width\": 364,\n        \"numeric\": false\n    },\n    \"title\": {\n        \"title\": \"Title\",\n        \"parser\": \"\",\n        \"width\": 364,\n        \"numeric\": false\n    }\n}','{\n    \"filter\": \"\",\n    \"sort\": \"`date` DESC\",\n    \"per_page\": \"15\"\n}','{\n    \"feature\": \"on\",\n    \"edit\": \"on\",\n    \"delete\": \"on\"\n}','',4),
	(7,6,'Categories','','draggable','btx_news_categories','{\n    \"title\": {\n        \"title\": \"Title\",\n        \"parser\": \"\",\n        \"width\": 384,\n        \"numeric\": false\n    },\n    \"hide_from_display\": {\n        \"title\": \"Hidden\",\n        \"parser\": \"\",\n        \"width\": 384,\n        \"numeric\": false\n    }\n}','null','{\n    \"edit\": \"on\",\n    \"delete\": \"on\"\n}','',5);

/*!40000 ALTER TABLE `bigtree_module_views` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table bigtree_modules
# ------------------------------------------------------------

DROP TABLE IF EXISTS `bigtree_modules`;

CREATE TABLE `bigtree_modules` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `group` int(11) unsigned DEFAULT NULL,
  `name` varchar(255) NOT NULL DEFAULT '',
  `route` varchar(255) NOT NULL DEFAULT '',
  `class` varchar(255) NOT NULL DEFAULT '',
  `icon` varchar(255) NOT NULL,
  `gbp` text NOT NULL,
  `position` int(11) NOT NULL,
  `extension` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `group` (`group`),
  KEY `route` (`route`),
  KEY `extension` (`extension`),
  CONSTRAINT `bigtree_modules_ibfk_1` FOREIGN KEY (`group`) REFERENCES `bigtree_module_groups` (`id`) ON DELETE SET NULL,
  CONSTRAINT `bigtree_modules_ibfk_2` FOREIGN KEY (`extension`) REFERENCES `bigtree_extensions` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `bigtree_modules` WRITE;
/*!40000 ALTER TABLE `bigtree_modules` DISABLE KEYS */;

INSERT INTO `bigtree_modules` (`id`, `group`, `name`, `route`, `class`, `icon`, `gbp`, `position`, `extension`)
VALUES
	(1,NULL,'Events','com.fastspot.events*events','BTXEvents','events','{\n    \"name\": \"\",\n    \"table\": \"\",\n    \"other_table\": \"\"\n}',0,'com.fastspot.events'),
	(2,NULL,'Form Builder','com.fastspot.form-builder*btx-form-builder','BTXFormBuilder','form','{\n    \"name\": \"\",\n    \"table\": \"\",\n    \"other_table\": \"\"\n}',0,'com.fastspot.form-builder'),
	(3,NULL,'Reusable Callouts','com.fastspot.reusable-callouts*reusable-callouts','BTXReusableCallouts','gear','{\n    \"name\": \"\",\n    \"table\": \"\",\n    \"item_parser\": \"\",\n    \"other_table\": \"\"\n}',0,'com.fastspot.reusable-callouts'),
	(4,NULL,'Alerts','alerts','BTXAlerts','target','{\n    \"name\": \"\",\n    \"table\": \"\",\n    \"item_parser\": \"\",\n    \"other_table\": \"\"\n}',0,NULL),
	(5,1,'News','news','BTXNews','news','null',0,NULL),
	(6,1,'Categories','categories','BTXNewsCategories','category','null',0,NULL);

/*!40000 ALTER TABLE `bigtree_modules` ENABLE KEYS */;
UNLOCK TABLES;


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
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `page` (`page`),
  KEY `saved` (`saved`),
  CONSTRAINT `bigtree_page_revisions_ibfk_1` FOREIGN KEY (`page`) REFERENCES `bigtree_pages` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `bigtree_page_revisions` WRITE;
/*!40000 ALTER TABLE `bigtree_page_revisions` DISABLE KEYS */;

INSERT INTO `bigtree_page_revisions` (`id`, `page`, `title`, `meta_keywords`, `meta_description`, `template`, `external`, `new_window`, `resources`, `author`, `saved`, `saved_description`, `updated_at`)
VALUES
	(1,1,'Search','','','search','','','{\n    \"cse_id\": \"\"\n}',1,'','','2018-08-02 14:37:57');

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
  `module` varchar(255) DEFAULT NULL,
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
  `data` longtext,
  `is_login` char(2) NOT NULL DEFAULT '',
  `logged_in_user` int(11) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_logged_in_user` (`logged_in_user`),
  CONSTRAINT `fk_logged_in_user` FOREIGN KEY (`logged_in_user`) REFERENCES `bigtree_users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `bigtree_sessions` WRITE;
/*!40000 ALTER TABLE `bigtree_sessions` DISABLE KEYS */;

INSERT INTO `bigtree_sessions` (`id`, `last_accessed`, `data`, `is_login`, `logged_in_user`)
VALUES
	('1qac0unk0cs2ebm29mhdv3d1rp',1533311803,'','',NULL),
	('55fipc4ub95lfcotr40fgisv5u',1533238092,'','',NULL),
	('8a5bahp5jklnipjk6f573ua7le',1533243010,'bigtree_login_redirect|s:37:\"http://bigtree.com/boilerplate/admin/\";bigtree_admin|a:7:{s:2:\"id\";s:1:\"1\";s:5:\"email\";s:22:\"deathstar@fastspot.com\";s:5:\"level\";s:1:\"2\";s:4:\"name\";s:9:\"Developer\";s:11:\"permissions\";N;s:10:\"csrf_token\";s:44:\"7I4JKdBEWuBPi22hUMXeYunCFYbet38ADd8TKdZH5Jc=\";s:16:\"csrf_token_field\";s:47:\"__csrf_token_C4668JFYCNPD2F7HNK53YYBAPALVCB8V__\";}','on',1),
	('gs00pmjlv45ugns0m81dptgkar',1533311803,'','',NULL),
	('rgoivci472uhiskppl30vgbrgt',1533311803,'bigtree_login_redirect|s:63:\"http://bigtree.com/boilerplate/admin/developer/callouts/groups/\";','',NULL),
	('t2ehc94i983vmh6hmhbtp7trbh',1533311803,'bigtree_login_redirect|s:63:\"http://bigtree.com/boilerplate/admin/developer/callouts/groups/\";','',NULL),
	('tdnbije4h2mid05nql15i3doj4',1533328427,'bigtree_login_redirect|s:37:\"http://bigtree.com/boilerplate/admin/\";bigtree_admin|a:8:{s:2:\"id\";s:1:\"1\";s:5:\"email\";s:22:\"deathstar@fastspot.com\";s:5:\"level\";s:1:\"2\";s:4:\"name\";s:9:\"Developer\";s:11:\"permissions\";N;s:10:\"csrf_token\";s:44:\"yjKxCkBTaAss4USM/tJSb5oxv/7T0LDV6DSbJyJyimg=\";s:16:\"csrf_token_field\";s:47:\"__csrf_token_0E4N8QMP74VTP4M5MJ99MWJQ23NXCV9C__\";s:9:\"form_data\";a:4:{s:4:\"page\";s:1:\"1\";s:11:\"return_link\";s:55:\"http://bigtree.com/boilerplate/admin/pages/view-tree/0/\";s:9:\"edit_link\";s:50:\"http://bigtree.com/boilerplate/admin/pages/edit/1/\";s:6:\"errors\";a:0:{}}}','on',1);

/*!40000 ALTER TABLE `bigtree_sessions` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table bigtree_settings
# ------------------------------------------------------------

DROP TABLE IF EXISTS `bigtree_settings`;

CREATE TABLE `bigtree_settings` (
  `id` varchar(255) NOT NULL DEFAULT '',
  `value` longblob NOT NULL,
  `type` varchar(255) NOT NULL,
  `settings` longtext NOT NULL,
  `name` varchar(255) NOT NULL DEFAULT '',
  `description` text NOT NULL,
  `locked` char(2) NOT NULL,
  `system` char(2) NOT NULL,
  `encrypted` char(2) NOT NULL,
  `extension` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `extension` (`extension`),
  CONSTRAINT `bigtree_settings_ibfk_1` FOREIGN KEY (`extension`) REFERENCES `bigtree_extensions` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `bigtree_settings` WRITE;
/*!40000 ALTER TABLE `bigtree_settings` DISABLE KEYS */;

INSERT INTO `bigtree_settings` (`id`, `value`, `type`, `settings`, `name`, `description`, `locked`, `system`, `encrypted`, `extension`)
VALUES
	('404-page-content',X'6E756C6C','html','','404 Page Content','','','','',NULL),
	('404-page-header',X'6E756C6C','text','','404 Page Header','','','','',NULL),
	('bigtree-file-manager-thumbnail-sizes',X'5B0A202020207B0A2020202020202020227469746C65223A2022536D616C6C222C0A202020202020202022707265666978223A2022736D616C6C5F222C0A2020202020202020227769647468223A2022313530222C0A202020202020202022686569676874223A2022313030222C0A2020202020202020225F5F696E7465726E616C2D7469746C65223A2022536D616C6C220A202020207D2C0A202020207B0A2020202020202020227469746C65223A20224D656469756D222C0A202020202020202022707265666978223A20226D656469756D5F222C0A2020202020202020227769647468223A2022333030222C0A202020202020202022686569676874223A2022323030222C0A2020202020202020225F5F696E7465726E616C2D7469746C65223A20224D656469756D220A202020207D2C0A202020207B0A2020202020202020227469746C65223A20224C61726765222C0A202020202020202022707265666978223A20226C617267655F222C0A2020202020202020227769647468223A2022383030222C0A202020202020202022686569676874223A2022363030222C0A2020202020202020225F5F696E7465726E616C2D7469746C65223A20224C61726765220A202020207D0A5D','matrix','{\n    \"columns\": [\n        {\n            \"id\": \"title\",\n            \"type\": \"text\",\n            \"title\": \"Title\",\n            \"display_title\": \"on\"\n        },\n        {\n            \"id\": \"prefix\",\n            \"type\": \"text\",\n            \"title\": \"File Prefix (i.e. thumb_)\",\n            \"display_title\": \"\"\n        },\n        {\n            \"id\": \"width\",\n            \"type\": \"text\",\n            \"title\": \"Width\",\n            \"display_title\": \"\"\n        },\n        {\n            \"id\": \"height\",\n            \"type\": \"text\",\n            \"title\": \"Height\",\n            \"display_title\": \"\"\n        }\n    ]\n}','File Manager Thumbnail Sizes','','on','','',NULL),
	('bigtree-file-metadata-fields',X'7B7D','','','','','','on','',NULL),
	('bigtree-internal-cron-last-run',X'223135333333323036373122','','','','','','on','',NULL),
	('bigtree-internal-deleted-users',X'7B7D','','','','','','on','',NULL),
	('bigtree-internal-disable-page-tagging','','checkbox','','Disable Tagging in Pages','<p>Disables the ability for users to tag pages. Check this box if you do not use tags on your front end for related content.</p>','','','',NULL),
	('bigtree-internal-google-analytics-api',X'F46701D22F29A35FAB4AC85F29B0504A40BB2037B9F02EC27C49EBB6907969B34DEBAF6011B4964888CCB71C93DB506CEE90B332DB42141C7F8093AF160ADF8F70E264512BB2248361A6B4AA7E90D3E3A8CE02CB1710AAA23203261A86DCAB545B4C6399CC7EA47BEB870AF49BA170EA2CD4774366D69C78B951CE1B79D79CE064D963067A0F65EF6C89B0A825883E83EFB37555EF81DC196F838B99246C54AB','','','','','','on','on',NULL),
	('bigtree-internal-media-settings',X'7B0A20202020226E616D65223A202246696C65204D616E6167657220507265736574222C0A20202020226D696E5F7769647468223A202231343430222C0A20202020226D696E5F686569676874223A202231303830222C0A2020202022707265766965775F707265666978223A2022636C61737369632D7878736D6C2D222C0A202020202263726F7073223A205B0A20202020202020207B0A20202020202020202020202022707265666978223A2022756C747261776964652D786C72672D222C0A202020202020202020202020227769647468223A202231343430222C0A20202020202020202020202022686569676874223A2022363137222C0A20202020202020202020202022677261797363616C65223A2022222C0A202020202020202020202020227468756D6273223A207B0A202020202020202020202020202020202231223A207B0A202020202020202020202020202020202020202022707265666978223A2022756C747261776964652D7878736D6C2D222C0A2020202020202020202020202020202020202020227769647468223A2022333030222C0A202020202020202020202020202020202020202022686569676874223A2022222C0A202020202020202020202020202020202020202022677261797363616C65223A2022220A202020202020202020202020202020207D2C0A202020202020202020202020202020202232223A207B0A202020202020202020202020202020202020202022707265666978223A2022756C747261776964652D78736D6C2D222C0A2020202020202020202020202020202020202020227769647468223A2022353030222C0A202020202020202020202020202020202020202022686569676874223A2022222C0A202020202020202020202020202020202020202022677261797363616C65223A2022220A202020202020202020202020202020207D2C0A202020202020202020202020202020202233223A207B0A202020202020202020202020202020202020202022707265666978223A2022756C747261776964652D736D6C2D222C0A2020202020202020202020202020202020202020227769647468223A2022373430222C0A202020202020202020202020202020202020202022686569676874223A2022222C0A202020202020202020202020202020202020202022677261797363616C65223A2022220A202020202020202020202020202020207D2C0A202020202020202020202020202020202234223A207B0A202020202020202020202020202020202020202022707265666978223A2022756C747261776964652D6D65642D222C0A2020202020202020202020202020202020202020227769647468223A2022393830222C0A202020202020202020202020202020202020202022686569676874223A2022222C0A202020202020202020202020202020202020202022677261797363616C65223A2022220A202020202020202020202020202020207D2C0A202020202020202020202020202020202235223A207B0A202020202020202020202020202020202020202022707265666978223A2022756C747261776964652D6C72672D222C0A2020202020202020202020202020202020202020227769647468223A202231323230222C0A202020202020202020202020202020202020202022686569676874223A2022222C0A202020202020202020202020202020202020202022677261797363616C65223A2022220A202020202020202020202020202020207D0A2020202020202020202020207D0A20202020202020207D2C0A20202020202020207B0A20202020202020202020202022707265666978223A2022776964652D786C72672D222C0A202020202020202020202020227769647468223A202231343430222C0A20202020202020202020202022686569676874223A2022383130222C0A20202020202020202020202022677261797363616C65223A2022222C0A202020202020202020202020227468756D6273223A207B0A202020202020202020202020202020202236223A207B0A202020202020202020202020202020202020202022707265666978223A2022776964652D7878736D6C2D222C0A2020202020202020202020202020202020202020227769647468223A2022333030222C0A202020202020202020202020202020202020202022686569676874223A2022222C0A202020202020202020202020202020202020202022677261797363616C65223A2022220A202020202020202020202020202020207D2C0A202020202020202020202020202020202237223A207B0A202020202020202020202020202020202020202022707265666978223A2022776964652D78736D6C2D222C0A2020202020202020202020202020202020202020227769647468223A2022353030222C0A202020202020202020202020202020202020202022686569676874223A2022222C0A202020202020202020202020202020202020202022677261797363616C65223A2022220A202020202020202020202020202020207D2C0A202020202020202020202020202020202238223A207B0A202020202020202020202020202020202020202022707265666978223A2022776964652D736D6C2D222C0A2020202020202020202020202020202020202020227769647468223A2022373430222C0A202020202020202020202020202020202020202022686569676874223A2022222C0A202020202020202020202020202020202020202022677261797363616C65223A2022220A202020202020202020202020202020207D2C0A202020202020202020202020202020202239223A207B0A202020202020202020202020202020202020202022707265666978223A2022776964652D6D65642D222C0A2020202020202020202020202020202020202020227769647468223A2022393830222C0A202020202020202020202020202020202020202022686569676874223A2022222C0A202020202020202020202020202020202020202022677261797363616C65223A2022220A202020202020202020202020202020207D2C0A20202020202020202020202020202020223130223A207B0A202020202020202020202020202020202020202022707265666978223A2022776964652D6C72672D222C0A2020202020202020202020202020202020202020227769647468223A202231323230222C0A202020202020202020202020202020202020202022686569676874223A2022222C0A202020202020202020202020202020202020202022677261797363616C65223A2022220A202020202020202020202020202020207D0A2020202020202020202020207D0A20202020202020207D2C0A20202020202020207B0A20202020202020202020202022707265666978223A202266756C6C2D786C72672D222C0A202020202020202020202020227769647468223A202231343430222C0A20202020202020202020202022686569676874223A202231303830222C0A20202020202020202020202022677261797363616C65223A2022222C0A202020202020202020202020227468756D6273223A207B0A20202020202020202020202020202020223131223A207B0A202020202020202020202020202020202020202022707265666978223A202266756C6C2D7878736D6C2D222C0A2020202020202020202020202020202020202020227769647468223A2022333030222C0A202020202020202020202020202020202020202022686569676874223A2022222C0A202020202020202020202020202020202020202022677261797363616C65223A2022220A202020202020202020202020202020207D2C0A20202020202020202020202020202020223132223A207B0A202020202020202020202020202020202020202022707265666978223A202266756C6C2D78736D6C2D222C0A2020202020202020202020202020202020202020227769647468223A2022353030222C0A202020202020202020202020202020202020202022686569676874223A2022222C0A202020202020202020202020202020202020202022677261797363616C65223A2022220A202020202020202020202020202020207D2C0A20202020202020202020202020202020223133223A207B0A202020202020202020202020202020202020202022707265666978223A202266756C6C2D736D6C2D222C0A2020202020202020202020202020202020202020227769647468223A2022373430222C0A202020202020202020202020202020202020202022686569676874223A2022222C0A202020202020202020202020202020202020202022677261797363616C65223A2022220A202020202020202020202020202020207D2C0A20202020202020202020202020202020223134223A207B0A202020202020202020202020202020202020202022707265666978223A202266756C6C2D6D65642D222C0A2020202020202020202020202020202020202020227769647468223A2022393830222C0A202020202020202020202020202020202020202022686569676874223A2022222C0A202020202020202020202020202020202020202022677261797363616C65223A2022220A202020202020202020202020202020207D2C0A20202020202020202020202020202020223135223A207B0A202020202020202020202020202020202020202022707265666978223A202266756C6C2D6C72672D222C0A2020202020202020202020202020202020202020227769647468223A202231323230222C0A202020202020202020202020202020202020202022686569676874223A2022222C0A202020202020202020202020202020202020202022677261797363616C65223A2022220A202020202020202020202020202020207D0A2020202020202020202020207D0A20202020202020207D2C0A20202020202020207B0A20202020202020202020202022707265666978223A20227371756172652D6D65642D222C0A202020202020202020202020227769647468223A2022393830222C0A20202020202020202020202022686569676874223A2022393830222C0A20202020202020202020202022677261797363616C65223A2022222C0A202020202020202020202020227468756D6273223A207B0A20202020202020202020202020202020223136223A207B0A202020202020202020202020202020202020202022707265666978223A20227371756172652D7878736D6C2D222C0A2020202020202020202020202020202020202020227769647468223A2022333030222C0A202020202020202020202020202020202020202022686569676874223A2022222C0A202020202020202020202020202020202020202022677261797363616C65223A2022220A202020202020202020202020202020207D2C0A20202020202020202020202020202020223137223A207B0A202020202020202020202020202020202020202022707265666978223A20227371756172652D78736D6C2D222C0A2020202020202020202020202020202020202020227769647468223A2022353030222C0A202020202020202020202020202020202020202022686569676874223A2022222C0A202020202020202020202020202020202020202022677261797363616C65223A2022220A202020202020202020202020202020207D2C0A20202020202020202020202020202020223138223A207B0A202020202020202020202020202020202020202022707265666978223A20227371756172652D736D6C2D222C0A2020202020202020202020202020202020202020227769647468223A2022373430222C0A202020202020202020202020202020202020202022686569676874223A2022222C0A202020202020202020202020202020202020202022677261797363616C65223A2022220A202020202020202020202020202020207D0A2020202020202020202020207D0A20202020202020207D2C0A20202020202020207B0A20202020202020202020202022707265666978223A2022636C61737369632D786C72672D222C0A202020202020202020202020227769647468223A202231343430222C0A20202020202020202020202022686569676874223A2022393630222C0A20202020202020202020202022677261797363616C65223A2022222C0A202020202020202020202020227468756D6273223A207B0A20202020202020202020202020202020223139223A207B0A202020202020202020202020202020202020202022707265666978223A2022636C61737369632D7878736D6C2D222C0A2020202020202020202020202020202020202020227769647468223A2022333030222C0A202020202020202020202020202020202020202022686569676874223A2022222C0A202020202020202020202020202020202020202022677261797363616C65223A2022220A202020202020202020202020202020207D2C0A20202020202020202020202020202020223230223A207B0A202020202020202020202020202020202020202022707265666978223A2022636C61737369632D78736D6C2D222C0A2020202020202020202020202020202020202020227769647468223A2022353030222C0A202020202020202020202020202020202020202022686569676874223A2022222C0A202020202020202020202020202020202020202022677261797363616C65223A2022220A202020202020202020202020202020207D2C0A20202020202020202020202020202020223231223A207B0A202020202020202020202020202020202020202022707265666978223A2022636C61737369632D736D6C2D222C0A2020202020202020202020202020202020202020227769647468223A2022373430222C0A202020202020202020202020202020202020202022686569676874223A2022222C0A202020202020202020202020202020202020202022677261797363616C65223A2022220A202020202020202020202020202020207D2C0A20202020202020202020202020202020223232223A207B0A202020202020202020202020202020202020202022707265666978223A2022636C61737369632D6D65642D222C0A2020202020202020202020202020202020202020227769647468223A2022393830222C0A202020202020202020202020202020202020202022686569676874223A2022222C0A202020202020202020202020202020202020202022677261797363616C65223A2022220A202020202020202020202020202020207D2C0A20202020202020202020202020202020223233223A207B0A202020202020202020202020202020202020202022707265666978223A2022636C61737369632D6C72672D222C0A2020202020202020202020202020202020202020227769647468223A202231323230222C0A202020202020202020202020202020202020202022686569676874223A2022222C0A202020202020202020202020202020202020202022677261797363616C65223A2022220A202020202020202020202020202020207D0A2020202020202020202020207D0A20202020202020207D2C0A20202020202020207B0A20202020202020202020202022707265666978223A2022706F7274726169742D66756C6C2D6D65642D222C0A202020202020202020202020227769647468223A2022373335222C0A20202020202020202020202022686569676874223A2022393830222C0A20202020202020202020202022677261797363616C65223A2022222C0A202020202020202020202020227468756D6273223A207B0A20202020202020202020202020202020223234223A207B0A202020202020202020202020202020202020202022707265666978223A2022706F7274726169742D66756C6C2D7878736D6C2D222C0A2020202020202020202020202020202020202020227769647468223A2022222C0A202020202020202020202020202020202020202022686569676874223A2022333030222C0A202020202020202020202020202020202020202022677261797363616C65223A2022220A202020202020202020202020202020207D2C0A20202020202020202020202020202020223235223A207B0A202020202020202020202020202020202020202022707265666978223A2022706F7274726169742D66756C6C2D78736D6C2D222C0A2020202020202020202020202020202020202020227769647468223A2022222C0A202020202020202020202020202020202020202022686569676874223A2022353030222C0A202020202020202020202020202020202020202022677261797363616C65223A2022220A202020202020202020202020202020207D2C0A20202020202020202020202020202020223236223A207B0A202020202020202020202020202020202020202022707265666978223A2022706F7274726169742D66756C6C2D736D6C2D222C0A2020202020202020202020202020202020202020227769647468223A2022222C0A202020202020202020202020202020202020202022686569676874223A2022373430222C0A202020202020202020202020202020202020202022677261797363616C65223A2022220A202020202020202020202020202020207D0A2020202020202020202020207D0A20202020202020207D2C0A20202020202020207B0A20202020202020202020202022707265666978223A2022706F7274726169742D636C61737369632D6D65642D222C0A202020202020202020202020227769647468223A2022363534222C0A20202020202020202020202022686569676874223A2022393830222C0A20202020202020202020202022677261797363616C65223A2022222C0A202020202020202020202020227468756D6273223A207B0A20202020202020202020202020202020223237223A207B0A202020202020202020202020202020202020202022707265666978223A2022706F7274726169742D636C61737369632D7878736D6C2D222C0A2020202020202020202020202020202020202020227769647468223A2022222C0A202020202020202020202020202020202020202022686569676874223A2022333030222C0A202020202020202020202020202020202020202022677261797363616C65223A2022220A202020202020202020202020202020207D2C0A20202020202020202020202020202020223238223A207B0A202020202020202020202020202020202020202022707265666978223A2022706F7274726169742D636C61737369632D78736D6C2D222C0A2020202020202020202020202020202020202020227769647468223A2022222C0A202020202020202020202020202020202020202022686569676874223A2022353030222C0A202020202020202020202020202020202020202022677261797363616C65223A2022220A202020202020202020202020202020207D2C0A20202020202020202020202020202020223239223A207B0A202020202020202020202020202020202020202022707265666978223A2022706F7274726169742D636C61737369632D736D6C2D222C0A2020202020202020202020202020202020202020227769647468223A2022222C0A202020202020202020202020202020202020202022686569676874223A2022373430222C0A202020202020202020202020202020202020202022677261797363616C65223A2022220A202020202020202020202020202020207D0A2020202020202020202020207D0A20202020202020207D0A202020205D2C0A20202020227468756D6273223A205B0A20202020202020207B0A20202020202020202020202022707265666978223A2022222C0A202020202020202020202020227769647468223A202233303030222C0A20202020202020202020202022686569676874223A202233303030222C0A20202020202020202020202022677261797363616C65223A2022220A20202020202020207D0A202020205D2C0A20202020226964223A202264656661756C74222C0A202020202270726573657473223A207B0A20202020202020202264656661756C74223A207B0A202020202020202020202020226E616D65223A202246696C65204D616E6167657220507265736574222C0A202020202020202020202020226D696E5F7769647468223A202231343430222C0A202020202020202020202020226D696E5F686569676874223A202231303830222C0A20202020202020202020202022707265766965775F707265666978223A2022636C61737369632D7878736D6C2D222C0A2020202020202020202020202263726F7073223A205B0A202020202020202020202020202020207B0A202020202020202020202020202020202020202022707265666978223A2022756C747261776964652D786C72672D222C0A2020202020202020202020202020202020202020227769647468223A202231343430222C0A202020202020202020202020202020202020202022686569676874223A2022363137222C0A202020202020202020202020202020202020202022677261797363616C65223A2022222C0A2020202020202020202020202020202020202020227468756D6273223A207B0A2020202020202020202020202020202020202020202020202231223A207B0A2020202020202020202020202020202020202020202020202020202022707265666978223A2022756C747261776964652D7878736D6C2D222C0A20202020202020202020202020202020202020202020202020202020227769647468223A2022333030222C0A2020202020202020202020202020202020202020202020202020202022686569676874223A2022222C0A2020202020202020202020202020202020202020202020202020202022677261797363616C65223A2022220A2020202020202020202020202020202020202020202020207D2C0A2020202020202020202020202020202020202020202020202232223A207B0A2020202020202020202020202020202020202020202020202020202022707265666978223A2022756C747261776964652D78736D6C2D222C0A20202020202020202020202020202020202020202020202020202020227769647468223A2022353030222C0A2020202020202020202020202020202020202020202020202020202022686569676874223A2022222C0A2020202020202020202020202020202020202020202020202020202022677261797363616C65223A2022220A2020202020202020202020202020202020202020202020207D2C0A2020202020202020202020202020202020202020202020202233223A207B0A2020202020202020202020202020202020202020202020202020202022707265666978223A2022756C747261776964652D736D6C2D222C0A20202020202020202020202020202020202020202020202020202020227769647468223A2022373430222C0A2020202020202020202020202020202020202020202020202020202022686569676874223A2022222C0A2020202020202020202020202020202020202020202020202020202022677261797363616C65223A2022220A2020202020202020202020202020202020202020202020207D2C0A2020202020202020202020202020202020202020202020202234223A207B0A2020202020202020202020202020202020202020202020202020202022707265666978223A2022756C747261776964652D6D65642D222C0A20202020202020202020202020202020202020202020202020202020227769647468223A2022393830222C0A2020202020202020202020202020202020202020202020202020202022686569676874223A2022222C0A2020202020202020202020202020202020202020202020202020202022677261797363616C65223A2022220A2020202020202020202020202020202020202020202020207D2C0A2020202020202020202020202020202020202020202020202235223A207B0A2020202020202020202020202020202020202020202020202020202022707265666978223A2022756C747261776964652D6C72672D222C0A20202020202020202020202020202020202020202020202020202020227769647468223A202231323230222C0A2020202020202020202020202020202020202020202020202020202022686569676874223A2022222C0A2020202020202020202020202020202020202020202020202020202022677261797363616C65223A2022220A2020202020202020202020202020202020202020202020207D0A20202020202020202020202020202020202020207D0A202020202020202020202020202020207D2C0A202020202020202020202020202020207B0A202020202020202020202020202020202020202022707265666978223A2022776964652D786C72672D222C0A2020202020202020202020202020202020202020227769647468223A202231343430222C0A202020202020202020202020202020202020202022686569676874223A2022383130222C0A202020202020202020202020202020202020202022677261797363616C65223A2022222C0A2020202020202020202020202020202020202020227468756D6273223A207B0A2020202020202020202020202020202020202020202020202236223A207B0A2020202020202020202020202020202020202020202020202020202022707265666978223A2022776964652D7878736D6C2D222C0A20202020202020202020202020202020202020202020202020202020227769647468223A2022333030222C0A2020202020202020202020202020202020202020202020202020202022686569676874223A2022222C0A2020202020202020202020202020202020202020202020202020202022677261797363616C65223A2022220A2020202020202020202020202020202020202020202020207D2C0A2020202020202020202020202020202020202020202020202237223A207B0A2020202020202020202020202020202020202020202020202020202022707265666978223A2022776964652D78736D6C2D222C0A20202020202020202020202020202020202020202020202020202020227769647468223A2022353030222C0A2020202020202020202020202020202020202020202020202020202022686569676874223A2022222C0A2020202020202020202020202020202020202020202020202020202022677261797363616C65223A2022220A2020202020202020202020202020202020202020202020207D2C0A2020202020202020202020202020202020202020202020202238223A207B0A2020202020202020202020202020202020202020202020202020202022707265666978223A2022776964652D736D6C2D222C0A20202020202020202020202020202020202020202020202020202020227769647468223A2022373430222C0A2020202020202020202020202020202020202020202020202020202022686569676874223A2022222C0A2020202020202020202020202020202020202020202020202020202022677261797363616C65223A2022220A2020202020202020202020202020202020202020202020207D2C0A2020202020202020202020202020202020202020202020202239223A207B0A2020202020202020202020202020202020202020202020202020202022707265666978223A2022776964652D6D65642D222C0A20202020202020202020202020202020202020202020202020202020227769647468223A2022393830222C0A2020202020202020202020202020202020202020202020202020202022686569676874223A2022222C0A2020202020202020202020202020202020202020202020202020202022677261797363616C65223A2022220A2020202020202020202020202020202020202020202020207D2C0A202020202020202020202020202020202020202020202020223130223A207B0A2020202020202020202020202020202020202020202020202020202022707265666978223A2022776964652D6C72672D222C0A20202020202020202020202020202020202020202020202020202020227769647468223A202231323230222C0A2020202020202020202020202020202020202020202020202020202022686569676874223A2022222C0A2020202020202020202020202020202020202020202020202020202022677261797363616C65223A2022220A2020202020202020202020202020202020202020202020207D0A20202020202020202020202020202020202020207D0A202020202020202020202020202020207D2C0A202020202020202020202020202020207B0A202020202020202020202020202020202020202022707265666978223A202266756C6C2D786C72672D222C0A2020202020202020202020202020202020202020227769647468223A202231343430222C0A202020202020202020202020202020202020202022686569676874223A202231303830222C0A202020202020202020202020202020202020202022677261797363616C65223A2022222C0A2020202020202020202020202020202020202020227468756D6273223A207B0A202020202020202020202020202020202020202020202020223131223A207B0A2020202020202020202020202020202020202020202020202020202022707265666978223A202266756C6C2D7878736D6C2D222C0A20202020202020202020202020202020202020202020202020202020227769647468223A2022333030222C0A2020202020202020202020202020202020202020202020202020202022686569676874223A2022222C0A2020202020202020202020202020202020202020202020202020202022677261797363616C65223A2022220A2020202020202020202020202020202020202020202020207D2C0A202020202020202020202020202020202020202020202020223132223A207B0A2020202020202020202020202020202020202020202020202020202022707265666978223A202266756C6C2D78736D6C2D222C0A20202020202020202020202020202020202020202020202020202020227769647468223A2022353030222C0A2020202020202020202020202020202020202020202020202020202022686569676874223A2022222C0A2020202020202020202020202020202020202020202020202020202022677261797363616C65223A2022220A2020202020202020202020202020202020202020202020207D2C0A202020202020202020202020202020202020202020202020223133223A207B0A2020202020202020202020202020202020202020202020202020202022707265666978223A202266756C6C2D736D6C2D222C0A20202020202020202020202020202020202020202020202020202020227769647468223A2022373430222C0A2020202020202020202020202020202020202020202020202020202022686569676874223A2022222C0A2020202020202020202020202020202020202020202020202020202022677261797363616C65223A2022220A2020202020202020202020202020202020202020202020207D2C0A202020202020202020202020202020202020202020202020223134223A207B0A2020202020202020202020202020202020202020202020202020202022707265666978223A202266756C6C2D6D65642D222C0A20202020202020202020202020202020202020202020202020202020227769647468223A2022393830222C0A2020202020202020202020202020202020202020202020202020202022686569676874223A2022222C0A2020202020202020202020202020202020202020202020202020202022677261797363616C65223A2022220A2020202020202020202020202020202020202020202020207D2C0A202020202020202020202020202020202020202020202020223135223A207B0A2020202020202020202020202020202020202020202020202020202022707265666978223A202266756C6C2D6C72672D222C0A20202020202020202020202020202020202020202020202020202020227769647468223A202231323230222C0A2020202020202020202020202020202020202020202020202020202022686569676874223A2022222C0A2020202020202020202020202020202020202020202020202020202022677261797363616C65223A2022220A2020202020202020202020202020202020202020202020207D0A20202020202020202020202020202020202020207D0A202020202020202020202020202020207D2C0A202020202020202020202020202020207B0A202020202020202020202020202020202020202022707265666978223A20227371756172652D6D65642D222C0A2020202020202020202020202020202020202020227769647468223A2022393830222C0A202020202020202020202020202020202020202022686569676874223A2022393830222C0A202020202020202020202020202020202020202022677261797363616C65223A2022222C0A2020202020202020202020202020202020202020227468756D6273223A207B0A202020202020202020202020202020202020202020202020223136223A207B0A2020202020202020202020202020202020202020202020202020202022707265666978223A20227371756172652D7878736D6C2D222C0A20202020202020202020202020202020202020202020202020202020227769647468223A2022333030222C0A2020202020202020202020202020202020202020202020202020202022686569676874223A2022222C0A2020202020202020202020202020202020202020202020202020202022677261797363616C65223A2022220A2020202020202020202020202020202020202020202020207D2C0A202020202020202020202020202020202020202020202020223137223A207B0A2020202020202020202020202020202020202020202020202020202022707265666978223A20227371756172652D78736D6C2D222C0A20202020202020202020202020202020202020202020202020202020227769647468223A2022353030222C0A2020202020202020202020202020202020202020202020202020202022686569676874223A2022222C0A2020202020202020202020202020202020202020202020202020202022677261797363616C65223A2022220A2020202020202020202020202020202020202020202020207D2C0A202020202020202020202020202020202020202020202020223138223A207B0A2020202020202020202020202020202020202020202020202020202022707265666978223A20227371756172652D736D6C2D222C0A20202020202020202020202020202020202020202020202020202020227769647468223A2022373430222C0A2020202020202020202020202020202020202020202020202020202022686569676874223A2022222C0A2020202020202020202020202020202020202020202020202020202022677261797363616C65223A2022220A2020202020202020202020202020202020202020202020207D0A20202020202020202020202020202020202020207D0A202020202020202020202020202020207D2C0A202020202020202020202020202020207B0A202020202020202020202020202020202020202022707265666978223A2022636C61737369632D786C72672D222C0A2020202020202020202020202020202020202020227769647468223A202231343430222C0A202020202020202020202020202020202020202022686569676874223A2022393630222C0A202020202020202020202020202020202020202022677261797363616C65223A2022222C0A2020202020202020202020202020202020202020227468756D6273223A207B0A202020202020202020202020202020202020202020202020223139223A207B0A2020202020202020202020202020202020202020202020202020202022707265666978223A2022636C61737369632D7878736D6C2D222C0A20202020202020202020202020202020202020202020202020202020227769647468223A2022333030222C0A2020202020202020202020202020202020202020202020202020202022686569676874223A2022222C0A2020202020202020202020202020202020202020202020202020202022677261797363616C65223A2022220A2020202020202020202020202020202020202020202020207D2C0A202020202020202020202020202020202020202020202020223230223A207B0A2020202020202020202020202020202020202020202020202020202022707265666978223A2022636C61737369632D78736D6C2D222C0A20202020202020202020202020202020202020202020202020202020227769647468223A2022353030222C0A2020202020202020202020202020202020202020202020202020202022686569676874223A2022222C0A2020202020202020202020202020202020202020202020202020202022677261797363616C65223A2022220A2020202020202020202020202020202020202020202020207D2C0A202020202020202020202020202020202020202020202020223231223A207B0A2020202020202020202020202020202020202020202020202020202022707265666978223A2022636C61737369632D736D6C2D222C0A20202020202020202020202020202020202020202020202020202020227769647468223A2022373430222C0A2020202020202020202020202020202020202020202020202020202022686569676874223A2022222C0A2020202020202020202020202020202020202020202020202020202022677261797363616C65223A2022220A2020202020202020202020202020202020202020202020207D2C0A202020202020202020202020202020202020202020202020223232223A207B0A2020202020202020202020202020202020202020202020202020202022707265666978223A2022636C61737369632D6D65642D222C0A20202020202020202020202020202020202020202020202020202020227769647468223A2022393830222C0A2020202020202020202020202020202020202020202020202020202022686569676874223A2022222C0A2020202020202020202020202020202020202020202020202020202022677261797363616C65223A2022220A2020202020202020202020202020202020202020202020207D2C0A202020202020202020202020202020202020202020202020223233223A207B0A2020202020202020202020202020202020202020202020202020202022707265666978223A2022636C61737369632D6C72672D222C0A20202020202020202020202020202020202020202020202020202020227769647468223A202231323230222C0A2020202020202020202020202020202020202020202020202020202022686569676874223A2022222C0A2020202020202020202020202020202020202020202020202020202022677261797363616C65223A2022220A2020202020202020202020202020202020202020202020207D0A20202020202020202020202020202020202020207D0A202020202020202020202020202020207D2C0A202020202020202020202020202020207B0A202020202020202020202020202020202020202022707265666978223A2022706F7274726169742D66756C6C2D6D65642D222C0A2020202020202020202020202020202020202020227769647468223A2022373335222C0A202020202020202020202020202020202020202022686569676874223A2022393830222C0A202020202020202020202020202020202020202022677261797363616C65223A2022222C0A2020202020202020202020202020202020202020227468756D6273223A207B0A202020202020202020202020202020202020202020202020223234223A207B0A2020202020202020202020202020202020202020202020202020202022707265666978223A2022706F7274726169742D66756C6C2D7878736D6C2D222C0A20202020202020202020202020202020202020202020202020202020227769647468223A2022222C0A2020202020202020202020202020202020202020202020202020202022686569676874223A2022333030222C0A2020202020202020202020202020202020202020202020202020202022677261797363616C65223A2022220A2020202020202020202020202020202020202020202020207D2C0A202020202020202020202020202020202020202020202020223235223A207B0A2020202020202020202020202020202020202020202020202020202022707265666978223A2022706F7274726169742D66756C6C2D78736D6C2D222C0A20202020202020202020202020202020202020202020202020202020227769647468223A2022222C0A2020202020202020202020202020202020202020202020202020202022686569676874223A2022353030222C0A2020202020202020202020202020202020202020202020202020202022677261797363616C65223A2022220A2020202020202020202020202020202020202020202020207D2C0A202020202020202020202020202020202020202020202020223236223A207B0A2020202020202020202020202020202020202020202020202020202022707265666978223A2022706F7274726169742D66756C6C2D736D6C2D222C0A20202020202020202020202020202020202020202020202020202020227769647468223A2022222C0A2020202020202020202020202020202020202020202020202020202022686569676874223A2022373430222C0A2020202020202020202020202020202020202020202020202020202022677261797363616C65223A2022220A2020202020202020202020202020202020202020202020207D0A20202020202020202020202020202020202020207D0A202020202020202020202020202020207D2C0A202020202020202020202020202020207B0A202020202020202020202020202020202020202022707265666978223A2022706F7274726169742D636C61737369632D6D65642D222C0A2020202020202020202020202020202020202020227769647468223A2022363534222C0A202020202020202020202020202020202020202022686569676874223A2022393830222C0A202020202020202020202020202020202020202022677261797363616C65223A2022222C0A2020202020202020202020202020202020202020227468756D6273223A207B0A202020202020202020202020202020202020202020202020223237223A207B0A2020202020202020202020202020202020202020202020202020202022707265666978223A2022706F7274726169742D636C61737369632D7878736D6C2D222C0A20202020202020202020202020202020202020202020202020202020227769647468223A2022222C0A2020202020202020202020202020202020202020202020202020202022686569676874223A2022333030222C0A2020202020202020202020202020202020202020202020202020202022677261797363616C65223A2022220A2020202020202020202020202020202020202020202020207D2C0A202020202020202020202020202020202020202020202020223238223A207B0A2020202020202020202020202020202020202020202020202020202022707265666978223A2022706F7274726169742D636C61737369632D78736D6C2D222C0A20202020202020202020202020202020202020202020202020202020227769647468223A2022222C0A2020202020202020202020202020202020202020202020202020202022686569676874223A2022353030222C0A2020202020202020202020202020202020202020202020202020202022677261797363616C65223A2022220A2020202020202020202020202020202020202020202020207D2C0A202020202020202020202020202020202020202020202020223239223A207B0A2020202020202020202020202020202020202020202020202020202022707265666978223A2022706F7274726169742D636C61737369632D736D6C2D222C0A20202020202020202020202020202020202020202020202020202020227769647468223A2022222C0A2020202020202020202020202020202020202020202020202020202022686569676874223A2022373430222C0A2020202020202020202020202020202020202020202020202020202022677261797363616C65223A2022220A2020202020202020202020202020202020202020202020207D0A20202020202020202020202020202020202020207D0A202020202020202020202020202020207D0A2020202020202020202020205D2C0A202020202020202020202020227468756D6273223A205B0A202020202020202020202020202020207B0A202020202020202020202020202020202020202022707265666978223A2022222C0A2020202020202020202020202020202020202020227769647468223A202233303030222C0A202020202020202020202020202020202020202022686569676874223A202233303030222C0A202020202020202020202020202020202020202022677261797363616C65223A2022220A202020202020202020202020202020207D0A2020202020202020202020205D2C0A202020202020202020202020226964223A202264656661756C74220A20202020202020207D0A202020207D0A7D','','','','','','on','',NULL),
	('bigtree-internal-payment-gateway',X'3EB846AB782071A8ADC61943783EAC9A706E60A556AC48353209062204569BF90A23660D50C0E6C0FA10B88E4C4A5DEE','','','','','','on','on',NULL),
	('bigtree-internal-per-page',X'3135','text','','Number of Items Per Page','<p>This should be a numeric amount and controls the number of items per page in areas such as views, settings, users, etc.</p>','on','','',NULL),
	('bigtree-internal-revision',X'2233303922','','','','','','on','',NULL),
	('bigtree-internal-security-policy',X'7B2270617373776F7264223A7B22696E7669746174696F6E73223A20226F6E227D7D','','','','','','on','',NULL),
	('bigtree-internal-storage',X'7B0A202020202273657276696365223A20226C6F63616C220A7D','','','','','','on','',NULL),
	('com.fastspot.form-builder*settings',X'7B0A20202020226163636570745F7061796D656E7473223A2022222C0A20202020226E6F5F637373223A20226F6E222C0A2020202022646F6E745F647261775F706167655F686561646572223A20226F6E222C0A202020202264697361626C655F636F6C756D6E73223A20226F6E222C0A2020202022726563617074636861223A207B0A202020202020202022736974655F6B6579223A2022222C0A2020202020202020227365637265745F6B6579223A2022220A202020207D2C0A2020202022746578745F77726170706572223A20223C64697620636C6173733D5C227479706F6772617068795C223E222C0A2020202022746578745F777261707065725F656E64223A20223C2F6469763E220A7D','','','Form Builder Settings','','','on','','com.fastspot.form-builder'),
	('nav-footer',X'6E756C6C','matrix','{\n    \"max\": \"\",\n    \"style\": \"list\",\n    \"columns\": [\n        {\n            \"type\": \"text\",\n            \"id\": \"title\",\n            \"title\": \"Title\",\n            \"subtitle\": \"\",\n            \"display_title\": \"on\",\n            \"settings\": \"{\\\"validation\\\":\\\"required\\\",\\\"sub_type\\\":\\\"\\\",\\\"max_length\\\":\\\"\\\"}\"\n        },\n        {\n            \"type\": \"com.fastspot.link-finder-field-type*link-finder\",\n            \"id\": \"url\",\n            \"title\": \"URL\",\n            \"subtitle\": \"(include http://)\",\n            \"settings\": \"\"\n        }\n    ]\n}','Navigation - Footer','','','','',NULL),
	('nav-secondary',X'6E756C6C','matrix','{\n    \"max\": \"\",\n    \"style\": \"list\",\n    \"columns\": [\n        {\n            \"type\": \"text\",\n            \"id\": \"title\",\n            \"title\": \"Title\",\n            \"subtitle\": \"\",\n            \"display_title\": \"on\",\n            \"settings\": \"{\\\"validation\\\":\\\"required\\\",\\\"sub_type\\\":\\\"\\\",\\\"max_length\\\":\\\"\\\"}\"\n        },\n        {\n            \"type\": \"com.fastspot.link-finder-field-type*link-finder\",\n            \"id\": \"url\",\n            \"title\": \"URL\",\n            \"subtitle\": \"(include http://)\",\n            \"settings\": \"\"\n        }\n    ]\n}','Navigation - Secondary','','','','',NULL),
	('nav-social',X'6E756C6C','matrix','{\n    \"max\": \"\",\n    \"style\": \"list\",\n    \"columns\": [\n        {\n            \"type\": \"list\",\n            \"id\": \"title\",\n            \"title\": \"Service\",\n            \"subtitle\": \"\",\n            \"display_title\": \"on\",\n            \"settings\": \"{\\\"validation\\\":\\\"required\\\",\\\"list_type\\\":\\\"static\\\",\\\"allow-empty\\\":\\\"Yes\\\",\\\"list\\\":[{\\\"value\\\":\\\"Facebook\\\",\\\"description\\\":\\\"Facebook\\\"},{\\\"value\\\":\\\"Twitter\\\",\\\"description\\\":\\\"Twitter\\\"},{\\\"value\\\":\\\"Instagram\\\",\\\"description\\\":\\\"Instagram\\\"},{\\\"value\\\":\\\"Flickr\\\",\\\"description\\\":\\\"Flickr\\\"},{\\\"value\\\":\\\"LinkedIn\\\",\\\"description\\\":\\\"LinkedIn\\\"},{\\\"value\\\":\\\"Vimeo\\\",\\\"description\\\":\\\"Vimeo\\\"},{\\\"value\\\":\\\"YouTube\\\",\\\"description\\\":\\\"YouTube\\\"}],\\\"pop-table\\\":\\\"\\\",\\\"parser\\\":\\\"\\\"}\"\n        },\n        {\n            \"type\": \"text\",\n            \"id\": \"url\",\n            \"title\": \"URL\",\n            \"subtitle\": \"(include http://)\",\n            \"settings\": \"{\\\"validation\\\":\\\"link required\\\",\\\"sub_type\\\":\\\"\\\",\\\"max_length\\\":\\\"\\\"}\"\n        }\n    ]\n}','Navigation - Social','','','','',NULL);

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



# Dump of table bigtree_templates
# ------------------------------------------------------------

DROP TABLE IF EXISTS `bigtree_templates`;

CREATE TABLE `bigtree_templates` (
  `id` varchar(255) NOT NULL DEFAULT '',
  `name` varchar(255) NOT NULL DEFAULT '',
  `routed` char(2) NOT NULL,
  `resources` text NOT NULL,
  `module` int(11) unsigned NOT NULL,
  `level` int(11) unsigned NOT NULL,
  `position` int(11) NOT NULL DEFAULT '0',
  `extension` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `routed` (`routed`),
  KEY `position` (`position`),
  KEY `extension` (`extension`),
  CONSTRAINT `bigtree_templates_ibfk_1` FOREIGN KEY (`extension`) REFERENCES `bigtree_extensions` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `bigtree_templates` WRITE;
/*!40000 ALTER TABLE `bigtree_templates` DISABLE KEYS */;

INSERT INTO `bigtree_templates` (`id`, `name`, `routed`, `resources`, `module`, `level`, `position`, `extension`)
VALUES
	('com.fastspot.form-builder*btx-form-builder','Form Builder','on','[\n    {\n        \"id\": \"page_header\",\n        \"title\": \"Page Header\",\n        \"subtitle\": \"\",\n        \"type\": \"text\",\n        \"options\": []\n    },\n    {\n        \"id\": \"page_content\",\n        \"title\": \"Page Content\",\n        \"subtitle\": \"\",\n        \"type\": \"html\",\n        \"options\": []\n    },\n    {\n        \"id\": \"form\",\n        \"title\": \"Form\",\n        \"subtitle\": \"\",\n        \"type\": \"com.fastspot.form-builder*form-builder-picker\",\n        \"options\": {\n            \"list_type\": \"db\",\n            \"allow-empty\": \"No\",\n            \"pop-table\": \"btx_form_builder_forms\",\n            \"pop-description\": \"title\",\n            \"pop-sort\": \"`title` ASC\"\n        }\n    },\n    {\n        \"id\": \"emails\",\n        \"title\": \"Email Addresses\",\n        \"subtitle\": \"(to send submissions notifications to \\u2014 separate with commas)\",\n        \"type\": \"textarea\",\n        \"options\": []\n    },\n    {\n        \"id\": \"thank_you_page_header\",\n        \"title\": \"Thank You Page Header\",\n        \"subtitle\": \"\",\n        \"type\": \"text\",\n        \"options\": []\n    },\n    {\n        \"id\": \"thank_you_page_content\",\n        \"title\": \"Thank You Page Content\",\n        \"subtitle\": \"\",\n        \"type\": \"html\",\n        \"options\": []\n    }\n]',0,0,3,'com.fastspot.form-builder'),
	('content','Content','','[\n    {\n        \"id\": \"page_header\",\n        \"title\": \"Page Header\",\n        \"subtitle\": \"\",\n        \"type\": \"text\",\n        \"settings\": null\n    },\n    {\n        \"id\": \"page_content\",\n        \"title\": \"Page Content\",\n        \"subtitle\": \"\",\n        \"type\": \"html\",\n        \"settings\": null\n    },\n    {\n        \"id\": \"in_content_callouts\",\n        \"title\": \"In Content Callouts\",\n        \"subtitle\": \"\",\n        \"type\": \"callouts\",\n        \"settings\": {\n            \"groups\": [\n                \"2\"\n            ],\n            \"noun\": \"\",\n            \"max\": \"\"\n        }\n    },\n    {\n        \"id\": \"sidebar_callouts\",\n        \"title\": \"Sidebar Callouts\",\n        \"subtitle\": \"\",\n        \"type\": \"callouts\",\n        \"settings\": {\n            \"groups\": [\n                \"3\"\n            ],\n            \"noun\": \"\",\n            \"max\": \"\"\n        }\n    },\n    {\n        \"id\": \"full_width_callouts\",\n        \"title\": \"Full Width Callouts\",\n        \"subtitle\": \"\",\n        \"type\": \"callouts\",\n        \"settings\": {\n            \"groups\": [\n                \"1\"\n            ],\n            \"noun\": \"\",\n            \"max\": \"\"\n        }\n    }\n]',0,0,5,NULL),
	('events','Events','on','[]',0,0,1,NULL),
	('full','Full Width','','[\n    {\n        \"id\": \"page_header\",\n        \"type\": \"text\",\n        \"title\": \"Page Header\",\n        \"subtitle\": \"\",\n        \"settings\": null\n    },\n    {\n        \"id\": \"page_content\",\n        \"type\": \"html\",\n        \"title\": \"Page Content\",\n        \"subtitle\": \"\",\n        \"settings\": null\n    },\n    {\n        \"id\": \"in_content_callouts\",\n        \"type\": \"callouts\",\n        \"title\": \"In Content Callouts\",\n        \"subtitle\": \"\",\n        \"settings\": {\n            \"groups\": [\n                \"2\"\n            ],\n            \"noun\": \"\",\n            \"max\": \"\"\n        }\n    },\n    {\n        \"id\": \"full_width_callouts\",\n        \"type\": \"callouts\",\n        \"title\": \"Full Width Callouts\",\n        \"subtitle\": \"\",\n        \"settings\": {\n            \"groups\": [\n                \"1\"\n            ],\n            \"noun\": \"\",\n            \"max\": \"\"\n        }\n    }\n]',0,0,3,NULL),
	('home','Home','','[\n    {\n        \"id\": \"page_feature\",\n        \"title\": \"Feature\",\n        \"subtitle\": \"\",\n        \"type\": \"com.fastspot.advanced-callouts*inline-callout-set\",\n        \"settings\": {\n            \"prefilled\": [\n                {\n                    \"title\": \"Feature\",\n                    \"type\": \"home-feature\"\n                }\n            ]\n        }\n    },\n    {\n        \"id\": \"full_width_callouts\",\n        \"title\": \"Blocks\",\n        \"subtitle\": \"\",\n        \"type\": \"callouts\",\n        \"settings\": {\n            \"groups\": [\n                \"4\",\n                \"1\"\n            ],\n            \"noun\": \"\",\n            \"max\": \"\"\n        }\n    }\n]',0,2,4,NULL),
	('news','News','on','[]',5,1,0,NULL),
	('search','Search','','[\n    {\n        \"id\": \"page_header\",\n        \"title\": \"Page Header\",\n        \"subtitle\": \"\",\n        \"type\": \"text\",\n        \"settings\": null\n    }\n]',0,2,2,NULL);

/*!40000 ALTER TABLE `bigtree_templates` ENABLE KEYS */;
UNLOCK TABLES;


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
	('session-5b635a2b2e9895.89062027','deathstar@fastspot.com','chain-5b635a2b2e5163.16265535','7I4JKdBEWuBPi22hUMXeYunCFYbet38ADd8TKdZH5Jc=','__csrf_token_C4668JFYCNPD2F7HNK53YYBAPALVCB8V__');

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
	(1,'deathstar@fastspot.com','$2y$10$4n6WNdDQQhfCiUzUm1nvrOkFCCMA1L4s0TdP5CG20AfNlPGZZhdAO','on','','','Developer','',2,'','','','','');

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
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `parent` int(11) DEFAULT NULL,
  `name` varchar(255) NOT NULL DEFAULT '',
  `route` varchar(255) NOT NULL DEFAULT '',
  `position` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `parent` (`parent`),
  KEY `route` (`route`),
  KEY `position` (`position`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table btx_events_date_cache
# ------------------------------------------------------------

DROP TABLE IF EXISTS `btx_events_date_cache`;

CREATE TABLE `btx_events_date_cache` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `event` int(11) NOT NULL,
  `start` datetime NOT NULL,
  `end` datetime NOT NULL,
  `date_cached` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `title_route` varchar(255) NOT NULL DEFAULT '',
  `date_route` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `event` (`event`),
  KEY `start` (`start`),
  KEY `end` (`end`),
  KEY `title_route` (`title_route`),
  KEY `date_route` (`date_route`),
  KEY `date_cached` (`date_cached`),
  CONSTRAINT `btx_events_date_cache_ibfk_1` FOREIGN KEY (`event`) REFERENCES `btx_events_events` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table btx_events_event_categories
# ------------------------------------------------------------

DROP TABLE IF EXISTS `btx_events_event_categories`;

CREATE TABLE `btx_events_event_categories` (
  `event` int(11) NOT NULL,
  `category` int(11) NOT NULL,
  KEY `event` (`event`),
  KEY `category` (`category`),
  CONSTRAINT `btx_events_event_categories_ibfk_1` FOREIGN KEY (`event`) REFERENCES `btx_events_events` (`id`) ON DELETE CASCADE,
  CONSTRAINT `btx_events_event_categories_ibfk_2` FOREIGN KEY (`category`) REFERENCES `btx_events_categories` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table btx_events_events
# ------------------------------------------------------------

DROP TABLE IF EXISTS `btx_events_events`;

CREATE TABLE `btx_events_events` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL DEFAULT '',
  `blurb` text NOT NULL,
  `content` mediumtext NOT NULL,
  `image` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL DEFAULT '',
  `link` varchar(255) NOT NULL DEFAULT '',
  `in_content_callouts` longtext NOT NULL,
  `full_width_callouts` longtext NOT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `start_time` time DEFAULT NULL,
  `end_time` time DEFAULT NULL,
  `all_day` char(2) NOT NULL,
  `recurrence_type` varchar(255) NOT NULL,
  `recurrence_detail` varchar(255) NOT NULL,
  `canceled_recurrences` text NOT NULL,
  `recurring_end_date` date DEFAULT NULL,
  `last_updated` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `featured` char(2) NOT NULL,
  `route` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `start_date` (`start_date`),
  KEY `end_date` (`end_date`),
  KEY `recurring_end_date` (`recurring_end_date`),
  KEY `recurrence_type` (`recurrence_type`),
  KEY `featured` (`featured`)
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
