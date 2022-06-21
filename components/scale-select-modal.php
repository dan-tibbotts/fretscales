        <!-- Modal -->
        <div class="modal fade" id="scale-select-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" id="scale-modal">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header bg-primary text-light">
                <h5 class="modal-title" id="scale-modal-title">Scale Selector</h5>
                <button type="button" class="close text-light" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">

              <h3 id="scale-heading" class="text-center">&nbsp;</h3>
              

              <!-- Key Select -->
              <div class="key-select bg-light">
              <h6 class="text-center">Select Key</h6>
                <!-- Root Note -->
                <div class="btn-group btn-group-toggle" data-toggle="buttons">
                  <label class="btn btn-primary" >
                    <input type="radio" class="scale-option-note" name="options" id="opt-a" value="a" autocomplete="off"> A
                  </label>
                  <label class="btn btn-primary">
                    <input type="radio" class="scale-option-note" name="options" id="opt-b" value="b" autocomplete="off"> B
                  </label>
                  <label class="btn btn-primary">
                    <input type="radio" class="scale-option-note" name="options" id="opt-c" value="c" autocomplete="off"> C
                  </label>
                  <label class="btn btn-primary">
                    <input type="radio" class="scale-option-note" name="options" id="opt-d" value="d" autocomplete="off"> D
                  </label>
                  <label class="btn btn-primary">
                    <input type="radio" class="scale-option-note" name="options" id="opt-e" value="e" autocomplete="off"> E
                  </label>
                  <label class="btn btn-primary">
                    <input type="radio" class="scale-option-note" name="options" id="opt-f" value="f" autocomplete="off"> F
                  </label>
                  <label class="btn btn-primary">
                    <input type="radio" class="scale-option-note" name="options" id="opt-g" value="g" autocomplete="off"> G
                  </label>             
                </div>

                <!-- Accidentals  -->
                <div class="btn-group btn-group-toggle" data-toggle="buttons">
                  <label class="btn btn-secondary modal-button">
                    <input type="radio" class="scale-option-accidental" name="options" id="opt-flat" value="flat" autocomplete="off"> &flat;
                  </label>
                  <label class="btn btn-secondary modal-button">
                    <input type="radio" class="scale-option-accidental" name="options" id="opt-natural" value="" autocomplete="off"> &natural;
                  </label>
                  <label class="btn btn-secondary modal-button">
                    <input type="radio" class="scale-option-accidental" name="options" id="opt-sharp" value="sharp" autocomplete="off"> &sharp;
                  </label>
                </div>
              </div> <!-- End of: Key Select -->


                <br>

              <div class="scale-select bg-light ">
                <!-- Scale  -->
                <h6 class="text-center">Select Scale</h6>
                <select class="custom-select my-1 mr-sm-2" id="opt-scale">
                  <option value="select" selected>Select Scale...</option>
                  <option value="major">Major</option>
                  <option value="minor">Minor</option>
                </select>
              </div>  

              <div id="selection-error" class="hidden">
              </div>

              </div>
              <div class="modal-footer">
                <button id="close-modal" type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                <button id="display-scale-button" type="button" class="btn btn-success">Display</button>
              </div>
            </div>
          </div>
        </div>