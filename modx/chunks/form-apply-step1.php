    <form action="" class="apply-step-1">

        <div class="left-calculate">
            <h1>Tuition Calculator</h1>
            <label for="choose-type">Choose type</label>
            <select name="choose-type" id="choose-type">
                <option value="choose-type"> --Select</option>
                <option value="Intensive">Intensive</option>
                <option value="Semestr">Semestr</option>
                <option value="Yearlong-Standart">Yearlong Standart</option>
                <option value="Yearlong-Standart-Max">Yearlong Standart Max</option>
                <option value="Yearlong-Standart-Extra-Max">Yearlong Standart Extra Max</option>
                <option value="Student-course">Student course</option>
            </select>
            <label for="sours">Source</label>
            <select name="source" id="sours">
                <option value="sours"> --Select</option>
                <option value="lang-polish">Polish</option>
                <option value="lang-english">English</option>
            </select>
            <label for="lang-level">Your language level</label>
            <select name="lang-level" id="lang-level">
                <option value="lang-level"> --Select</option>
                <option value="langlev-zero">Zero</option>
                <option value="langlev-begginer">Beggine</option>
                r
                <option value="langlev-medium">Medium</option>
                <option value="langlev-advanced">Advansed</option>
            </select>
            <label for="start-date">Starting date</label>
            <select name="start-date" id="start-date">
                <option value="start-date"> --Select</option>
                <option value="date-February">February</option>
                <option value="date-March">March</option>
                <option value="date-April">April</option>
                <option value="date-May">May</option>
                <option value="date-June">June</option>
                <option value="date-July">July</option>
                <option value="date-August">August</option>
                <option value="date-September">September</option>
                <option value="date-October">October</option>
                <option value="date-November">November</option>
                <option value="date-December">December</option>
            </select>
            <button type="submit" class="step-1-calc">Calculate</button>
        </div>

        <div class="right-summary">
            <h2>fees summary</h2>
            <span class="calc-right">Registration Fee:</span>
            <span class="calc-right">Postal Fee:</span>
            <span class="calc-right">Tuition:</span>
            <span class="total-sum">total:</span>
            <button type="submit" class="start-registr">
                <span>Start registration</span>
                <i class="fa fa-arrow-right start-arrow" aria-hidden="true"></i>
            </button>
        </div>

    </form>
