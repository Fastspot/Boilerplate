<?php
	class BTXAlerts extends BigTreeModule {

		public $Table = "btx_alerts";

		static function getActive() {
			$mod = new BigTreeModule;
			$item = SQL::fetch("SELECT * FROM btx_alerts
								WHERE archived != 'on'
							      AND (start_date IS NULL OR start_date <= NOW())
							      AND (end_date IS NULL OR end_date >= NOW())
							    ORDER BY last_updated DESC LIMIT 1"));

			if ($item) {
				return $mod->get($item);
			} else {
				return false;
			}
		}
		
	}
