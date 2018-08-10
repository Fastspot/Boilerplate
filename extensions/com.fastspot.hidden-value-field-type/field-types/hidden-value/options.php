<?
	$value = empty($data["hidden_value"]) ? "" : htmlspecialchars($data["hidden_value"]);
?>
<fieldset>
	<label>Hidden Value</label>
	<input type="text" name="hidden_value" value="<?=$value?>" class="required" />
</fieldset>