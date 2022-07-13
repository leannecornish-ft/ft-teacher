export default function Options() {
	return (
		<div class="o-forms-field o-forms-field--optional" role="group" aria-labelledby="radio-round-group-title" aria-describedby="radio-round-group-info">
      <span class="o-forms-title">
        <span class="o-forms-title__main" id="radio-round-group-title">Default round-style radio buttons</span>
        <span class="o-forms-title__prompt" id="radio-round-group-info">Optional prompt/description text</span>
      </span>

      <span class="o-forms-input o-forms-input--radio-round">
        <label>
          <input type="radio" name="default" value="Default 1" checked />

          <span class="o-forms-input__label"> Default 1 </span>
        </label>
        <label>
          <input type="radio" name="default" value="Default 2" />

          <span class="o-forms-input__label"> Default 2 </span>
        </label>
      </span>
		</div>	
	)
}